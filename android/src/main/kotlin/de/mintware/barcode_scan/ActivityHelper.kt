package de.mintware.barcode_scan

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.util.Log
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import io.flutter.plugin.common.EventChannel
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.PluginRegistry.ActivityResultListener
import io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener

class ActivityHelper(private var applicationContext: Context?,
                     var activity: Activity? = null
) : ActivityResultListener, RequestPermissionsResultListener {

    companion object {
        const val TAG = "BarcodeScanPlugin"
        const val REQ_START_SCAN = 100
        const val REQ_CAMERA_PERMISSION = 200
    }

    private val activityResultMap: HashMap<Int, ActivityResultListener> = linkedMapOf()
    private val permissionResultMap: HashMap<Int, RequestPermissionsResultListener> = linkedMapOf()

    fun showScannerActivity(result: MethodChannel.Result, config: Protos.Configuration) {
        if (activity == null) {
            Log.d(TAG, "Could not launch BarcodeScannerActivity because the plugin is not attached to any activity")
            return
        }

        activityResultMap[REQ_START_SCAN] = ScanResultHandler(result)

        val intent = Intent(applicationContext, BarcodeScannerActivity::class.java)
        intent.putExtra(BarcodeScannerActivity.EXTRA_CONFIG, config.toByteArray())
        activity!!.startActivityForResult(intent, REQ_START_SCAN)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?): Boolean {
        if (!activityResultMap.containsKey(requestCode)) {
            return false
        }

        return activityResultMap
                .getValue(requestCode)
                .onActivityResult(requestCode, resultCode, data)
    }

    fun requestCameraAccessIfNecessary(sink: EventChannel.EventSink?
    ): Boolean {
        if (activity == null) {
            Log.d(TAG, "Could not launch BarcodeScannerActivity because the plugin is not attached to any activity")
            return false
        }

        permissionResultMap[REQ_CAMERA_PERMISSION] = RequestCameraPermissionHandler(sink)

        val array = arrayOf(Manifest.permission.CAMERA)
        if (ContextCompat.checkSelfPermission(activity!!, Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_GRANTED) {
            return false
        }

        ActivityCompat.requestPermissions(activity!!, array, REQ_CAMERA_PERMISSION)
        return true
    }

    override fun onRequestPermissionsResult(requestCode: Int,
                                            permissions: Array<out String>?,
                                            grantResults: IntArray?
    ): Boolean {
        if (!permissionResultMap.containsKey(requestCode)) {
            return false
        }

        return permissionResultMap
                .getValue(requestCode)
                .onRequestPermissionsResult(requestCode, permissions, grantResults)
    }
}