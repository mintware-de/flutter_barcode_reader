package de.mintware.barcode_scan

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import com.google.zxing.Result
import me.dm7.barcodescanner.zxing.ZXingScannerView

class BarcodeScannerActivity : Activity(), ZXingScannerView.ResultHandler {

    lateinit var scannerView: ZXingScannerView

    companion object {
        const val REQUEST_CAMERA_PERMISSION = 100
        const val TOGGLE_FLASH = 200

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        title = ""
        scannerView = ZXingScannerView(this)
        scannerView.setAutoFocus(true)
        // this paramter will make your HUAWEI phone works great!
        scannerView.setAspectTolerance(0.5f)
        setContentView(scannerView)
    }

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

    override fun onResume() {
        super.onResume()
        scannerView.setResultHandler(this)
        scannerView.startCamera()
    }

    override fun onPause() {
        super.onPause()
        scannerView.stopCamera()
    }

    override fun handleResult(result: Result?) {
        val intent = Intent()
        intent.putExtra("SCAN_RESULT", result.toString())
        setResult(RESULT_OK, intent)
        finish()
    }
}