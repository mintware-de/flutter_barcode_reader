package de.mintware.barcode_scan

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.zxing.BarcodeFormat
import com.google.zxing.Result
import me.dm7.barcodescanner.zxing.ZXingScannerView

class BarcodeScannerActivity : Activity(), ZXingScannerView.ResultHandler {

    private lateinit var scannerView: ZXingAutofocusScannerView
    private lateinit var config: Protos.Configuration


    companion object {
        const val REQUEST_TAKE_PHOTO_CAMERA_PERMISSION = 100
        const val TOGGLE_FLASH = 200
        const val EXTRA_CONFIG = "config"
        const val EXTRA_RESULT = "scan_result"
        const val EXTRA_ERROR_CODE = "error_code"

        private val formatMap: Map<Protos.BarcodeFormat, BarcodeFormat> = mapOf(
                Protos.BarcodeFormat.aztec to BarcodeFormat.AZTEC,
                Protos.BarcodeFormat.code39 to BarcodeFormat.CODE_39,
                Protos.BarcodeFormat.code93 to BarcodeFormat.CODE_93,
                Protos.BarcodeFormat.code128 to BarcodeFormat.CODE_128,
                Protos.BarcodeFormat.dataMatrix to BarcodeFormat.DATA_MATRIX,
                Protos.BarcodeFormat.ean8 to BarcodeFormat.EAN_8,
                Protos.BarcodeFormat.ean13 to BarcodeFormat.EAN_13,
                Protos.BarcodeFormat.interleaved2of5 to BarcodeFormat.ITF,
                Protos.BarcodeFormat.pdf417 to BarcodeFormat.PDF_417,
                Protos.BarcodeFormat.qr to BarcodeFormat.QR_CODE,
                Protos.BarcodeFormat.upce to BarcodeFormat.UPC_E
        )
    }

    // region Activity lifecycle
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        config = Protos.Configuration.parseFrom(intent.extras!!.getByteArray(EXTRA_CONFIG))

        title = ""
        scannerView = ZXingAutofocusScannerView(this)

        scannerView.setAutoFocus(config.android.useAutoFocus)

        val restrictedFormats = mapRestrictedBarcodeTypes()
        if (restrictedFormats.isNotEmpty()) {
            scannerView.setFormats(restrictedFormats)
        }

        // this parameter will make your HUAWEI phone works great!
        scannerView.setAspectTolerance(config.android.aspectTolerance.toFloat())
        if (config.autoEnableFlash) {
            scannerView.flash = config.autoEnableFlash
            this.invalidateOptionsMenu()
        }

        setContentView(scannerView)
    }

    override fun onPause() {
        scannerView.stopCamera()
        super.onPause()
    }

    override fun onResume() {
        super.onResume()
        scannerView.setResultHandler(this)

        // start camera immediately if permission is already given
        if (!requestCameraAccessIfNecessary()) {
            startCamera()
        }
    }
    // endregion

    // region AppBar menu
    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        val buttonText = if (scannerView.flash) config.flashOffText else config.flashOnText
        val item = menu.add(0, TOGGLE_FLASH, 0, buttonText)
        item.setShowAsAction(MenuItem.SHOW_AS_ACTION_ALWAYS)

        return super.onCreateOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if (item.itemId == TOGGLE_FLASH) {
            scannerView.flash = !scannerView.flash
            this.invalidateOptionsMenu()
            return true
        }
        return super.onOptionsItemSelected(item)
    }
    // endregion

    override fun handleResult(result: Result?) {
        val intent = Intent()

        val builder = Protos.ScanResult.newBuilder()
        if (result == null) {

            builder.let {
                it.format = Protos.BarcodeFormat.unknown
                it.rawContent = "No data was scanned"
                it.type = Protos.ResultType.Error
            }
        } else {

            val format = (formatMap.filterValues { it == result.barcodeFormat }.keys.firstOrNull()
                    ?: Protos.BarcodeFormat.unknown)

            var formatNote = ""
            if (format == Protos.BarcodeFormat.unknown) {
                formatNote = result.barcodeFormat.toString()
            }

            builder.let {
                it.format = format
                it.formatNote = formatNote
                it.rawContent = result.text
                it.type = Protos.ResultType.Barcode
            }
        }
        val res = builder.build()
        intent.putExtra(EXTRA_RESULT, res.toByteArray())
        setResult(RESULT_OK, intent)
        finish()
    }

    private fun requestCameraAccessIfNecessary(): Boolean {
        val array = arrayOf(Manifest.permission.CAMERA)
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, array, REQUEST_TAKE_PHOTO_CAMERA_PERMISSION)
            return true
        }
        return false
    }

    override fun onRequestPermissionsResult(requestCode: Int,
                                            permissions: Array<out String>,
                                            grantResults: IntArray
    ) {
        if (requestCode != REQUEST_TAKE_PHOTO_CAMERA_PERMISSION) {
            super.onRequestPermissionsResult(requestCode, permissions, grantResults)
            return
        }
        if (verifyPermissions(grantResults)) {
            startCamera()
        } else {
            val intent = Intent()
            intent.putExtra(EXTRA_ERROR_CODE, "PERMISSION_NOT_GRANTED")
            setResult(RESULT_CANCELED, intent)
            finish()
        }
    }

    private fun startCamera() {
        if (config.useCamera > -1) {
            scannerView.startCamera(config.useCamera)
        } else {
            scannerView.startCamera()
        }
    }

    /**
     * Check that all given permissions have been granted by verifying that each entry in the
     * given array is of the value [PackageManager.PERMISSION_GRANTED].

     * @see Activity.onRequestPermissionsResult
     */
    private fun verifyPermissions(grantResults: IntArray): Boolean {
        // Verify that each required permission has been granted, otherwise return false.
        return grantResults.isNotEmpty() && grantResults.all {
            it == PackageManager.PERMISSION_GRANTED
        }
    }

    private fun mapRestrictedBarcodeTypes(): List<BarcodeFormat> {
        val types: MutableList<BarcodeFormat> = mutableListOf()

        this.config.restrictFormatList.filterNotNull().forEach {
            if (!formatMap.containsKey(it)) {
                print("Unrecognized")
                return@forEach
            }

            types.add(formatMap.getValue(it))
        }

        return types
    }
}

