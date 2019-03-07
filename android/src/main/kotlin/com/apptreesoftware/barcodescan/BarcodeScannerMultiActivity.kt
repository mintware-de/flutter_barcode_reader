package com.apptreesoftware.barcodescan

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import com.google.zxing.Result
import me.dm7.barcodescanner.zxing.ZXingScannerView
import android.widget.LinearLayout.LayoutParams
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.yourcompany.barcodescan.R


class BarcodeScannerMultiActivity : Activity(), ZXingScannerView.ResultHandler {

//    lateinit var scannerView: me.dm7.barcodescanner.zxing.ZXingScannerView
    lateinit var scannerView: ZXingScannerView
    val nums = ArrayList<String>()
    lateinit var txtData : TextView
    lateinit var buttonData : Button

    companion object {
        val REQUEST_TAKE_PHOTO_CAMERA_PERMISSION = 100
        val TOGGLE_FLASH = 200
        val TOGGLE_FINISH = 400

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        title = ""
        scannerView = ZXingScannerView(this)
        scannerView.setAutoFocus(true)
        var params2 : LayoutParams = LayoutParams(
                LayoutParams.MATCH_PARENT, // This will define text view width
                LayoutParams.MATCH_PARENT  // This will define text view height
        )

        params2.setMargins(0,0,0,0)

        scannerView.layoutParams = params2
        setContentView(R.layout.file)
        val contentFrame = findViewById<ViewGroup>(R.id.content_frame)
        contentFrame.addView(scannerView)

        buttonData = findViewById<Button>(R.id.buttonFinish)
        txtData = findViewById<TextView>(R.id.textViewCard)
        buttonData.setOnClickListener {
            intent.putExtra("SCAN_RESULT", nums)
            setResult(Activity.RESULT_OK, intent)
            finish()
        }



        }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        if (scannerView.flash) {
            val item = menu.add(0,
                    TOGGLE_FLASH, 0, "Flash Off")
            item.setShowAsAction(MenuItem.SHOW_AS_ACTION_ALWAYS)
        } else {
            val item = menu.add(0,
                    TOGGLE_FLASH, 0, "Flash On")
            item.setShowAsAction(MenuItem.SHOW_AS_ACTION_ALWAYS)
        }

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
        // start camera immediately if permission is already given
        if (!requestCameraAccessIfNecessary()) {
            scannerView.startCamera()
        }
    }

    override fun onPause() {
        super.onPause()
        scannerView.stopCamera()
    }

    override fun handleResult(result: Result?) {

        if(nums.contains(result.toString())){
            Toast.makeText(this,"Already Added ",Toast.LENGTH_SHORT).show()
            onResume()
        }else{
            nums.add(nums.lastIndex+1 ,result.toString())
            txtData.text = "Total cards: ${nums.lastIndex+1}"
            Toast.makeText(this,"Added ${result.toString()} ",Toast.LENGTH_SHORT).show()
            onResume()
        }

    }

    fun finishWithError(errorCode: String) {
        val intent = Intent()
        intent.putExtra("ERROR_CODE", errorCode)
        setResult(Activity.RESULT_CANCELED, intent)
        finish()
    }

    private fun requestCameraAccessIfNecessary(): Boolean {
        val array = arrayOf(Manifest.permission.CAMERA)
        if (ContextCompat
                .checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(this, array,
                    REQUEST_TAKE_PHOTO_CAMERA_PERMISSION)
            return true
        }
        return false
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>,grantResults: IntArray) {
        when (requestCode) {
            REQUEST_TAKE_PHOTO_CAMERA_PERMISSION -> {
                if (PermissionUtil.verifyPermissions(grantResults)) {
                    scannerView.startCamera()
                } else {
                    finishWithError("PERMISSION_NOT_GRANTED")
                }
            }
            else -> {
                super.onRequestPermissionsResult(requestCode, permissions, grantResults)
            }
        }
    }
}

