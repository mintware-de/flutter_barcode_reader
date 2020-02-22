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

    init {
        title = ""
    }

    private lateinit var config: Protos.Configuration
    private var scannerView: ZXingAutofocusScannerView? = null
    private var scannerViewInitialized: Boolean = false

    companion object {
        const val REQUEST_TAKE_PHOTO_CAMERA_PERMISSION = 100
        const val TOGGLE_FLASH = 200
        const val EXTRA_CONFIG = "config"
    }

    // region Activity lifecycle
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        config = Protos.Configuration.parseFrom(intent.extras!!.getByteArray(EXTRA_CONFIG))
    }

    private fun setupScannerView() {
        if (scannerViewInitialized) {
            return
        }

        scannerView = ZXingAutofocusScannerView(this).apply {
            setAutoFocus(true)
            val restrictedFormats = mapRestrictedBarcodeTypes()
            if (restrictedFormats.isNotEmpty()) {
                setFormats(restrictedFormats)
            }

            // this parameter will make your HUAWEI phone works great!
            setAspectTolerance(0.5f)
        }

        setContentView(scannerView)
        scannerViewInitialized = true
    }

    override fun onPause() {
        scannerView?.stopCamera()
        super.onPause()
    }

    override fun onResume() {
        super.onResume()

        if (!requestCameraAccessIfNecessary()) {
            setupScannerView()
            scannerView?.setResultHandler(this)
            startCamera()
        }
    }
    // endregion

    // region AppBar menu
    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        scannerView?.also {
            val buttonText = if (it.flash) config.flashOffText else config.flashOnText
            val item = menu.add(0, TOGGLE_FLASH, 0, buttonText)
            item.setShowAsAction(MenuItem.SHOW_AS_ACTION_ALWAYS)
        }

        return super.onCreateOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if (item.itemId == TOGGLE_FLASH) {
            scannerView?.toggleFlash()
            this.invalidateOptionsMenu()
            return true
        }
        return super.onOptionsItemSelected(item)
    }
    // endregion

    override fun handleResult(result: Result?) {
        val intent = Intent()
        intent.putExtra("SCAN_RESULT", result.toString())
        setResult(RESULT_OK, intent)
        finish()
    }

    private fun finishWithError(errorCode: String) {
        val intent = Intent()
        intent.putExtra("ERROR_CODE", errorCode)
        setResult(RESULT_CANCELED, intent)
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

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        if (requestCode == REQUEST_TAKE_PHOTO_CAMERA_PERMISSION) {
            if (verifyPermissions(grantResults)) {
                startCamera()
            } else {
                finishWithError("PERMISSION_NOT_GRANTED")
            }
            return
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    }

    private fun startCamera() {
        scannerView?.run {
            if (config.useCamera > -1) {
                startCamera(config.useCamera)
            } else {
                startCamera()
            }
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
            when (it) {
                Protos.BarcodeFormat.aztec -> types.add(BarcodeFormat.AZTEC)
                Protos.BarcodeFormat.code39 -> types.add(BarcodeFormat.CODE_39)
                Protos.BarcodeFormat.code93 -> types.add(BarcodeFormat.CODE_93)
                Protos.BarcodeFormat.code128 -> types.add(BarcodeFormat.CODE_128)
                Protos.BarcodeFormat.dataMatrix -> types.add(BarcodeFormat.DATA_MATRIX)
                Protos.BarcodeFormat.ean8 -> types.add(BarcodeFormat.EAN_8)
                Protos.BarcodeFormat.ean13 -> types.add(BarcodeFormat.EAN_13)
                Protos.BarcodeFormat.interleaved2of5 -> types.add(BarcodeFormat.ITF)
                Protos.BarcodeFormat.pdf417 -> types.add(BarcodeFormat.PDF_417)
                Protos.BarcodeFormat.qr -> types.add(BarcodeFormat.QR_CODE)
                Protos.BarcodeFormat.upce -> types.add(BarcodeFormat.UPC_E)
                Protos.BarcodeFormat.UNRECOGNIZED -> print("Unrecognized")
            }
        }

        return types
    }
}

