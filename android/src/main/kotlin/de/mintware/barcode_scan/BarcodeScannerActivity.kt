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
import com.google.zxing.Result
import me.dm7.barcodescanner.zxing.ZXingScannerView

class BarcodeScannerActivity : Activity(), ZXingScannerView.ResultHandler {

    private lateinit var scannerView: ZXingScannerView

    companion object {
        const val REQUEST_TAKE_PHOTO_CAMERA_PERMISSION = 100
        const val TOGGLE_FLASH = 200
    }

    // region Activity lifecycle
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        title = ""
        scannerView = ZXingScannerView(this)
        scannerView.setAutoFocus(true)

        // this parameter will make your HUAWEI phone works great!
        scannerView.setAspectTolerance(0.5f)
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
            scannerView.startCamera()
        }
    }
    // endregion

    // region AppBar menu
    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        val buttonText = if (scannerView.flash) "Flash Off" else "Flash On"
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
                scannerView.startCamera()
            } else {
                finishWithError("PERMISSION_NOT_GRANTED")
            }
            return
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
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
}

