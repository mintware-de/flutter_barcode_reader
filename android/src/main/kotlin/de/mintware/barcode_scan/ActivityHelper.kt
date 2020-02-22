package de.mintware.barcode_scan

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.util.Log
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.PluginRegistry

class ActivityHelper(private var applicationContext: Context?,
                     var activity: Activity? = null
) : PluginRegistry.ActivityResultListener {

    companion object {
        const val TAG = "BarcodeScanPlugin"
        const val REQ_START_SCAN = 100
    }

    private val resultMap: HashMap<Int, (requestCode: Int, resultCode: Int, data: Intent?) -> Boolean> = linkedMapOf()

    fun showScannerActivity(result: MethodChannel.Result, config: Protos.Configuration) {
        if (activity == null) {
            Log.d(TAG, "Could not launch BarcodeScannerActivity because the plugin is not attached to any activity")
            return
        }

        resultMap[REQ_START_SCAN] = { _, resultCode, data ->
            if (resultCode == Activity.RESULT_OK) {
                val barcode = data?.getStringExtra("SCAN_RESULT")
                if (barcode != null) {
                    result.success(barcode)
                } else {
                    result.error("No barcode was scanned", null, null)
                }
            } else {
                val errorCode = data?.getStringExtra("ERROR_CODE")
                result.error(errorCode, null, null)
            }
            true
        }

        val intent = Intent(applicationContext, BarcodeScannerActivity::class.java)
        intent.putExtra(BarcodeScannerActivity.EXTRA_CONFIG, config.toByteArray())
        activity!!.startActivityForResult(intent, REQ_START_SCAN)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?): Boolean {
        if (resultMap.containsKey(requestCode)) {
            return resultMap.getValue(requestCode).invoke(requestCode, resultCode, data)
        }
        return false
    }
}