package de.mintware.barcode_scan

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.util.Log
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import de.mintware.barcode_scan.BarcodeScannerActivity.Companion.REQUEST_CAMERA_PERMISSION
import io.flutter.plugin.common.EventChannel
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.MethodChannel.MethodCallHandler
import io.flutter.plugin.common.MethodChannel.Result
import io.flutter.plugin.common.PluginRegistry
import io.flutter.plugin.common.PluginRegistry.Registrar

class BarcodeScanPlugin(private val registrar: Registrar) :
        MethodCallHandler,
        PluginRegistry.ActivityResultListener,
        PluginRegistry.RequestPermissionsResultListener,
        EventChannel.StreamHandler {
    var result: Result? = null
    var sink: EventChannel.EventSink? = null;

    companion object {
        @JvmStatic
        fun registerWith(registrar: Registrar) {
            val channel = MethodChannel(registrar.messenger(), "de.mintware.barcode_scan")
            val eventChannel = EventChannel(registrar.messenger(), "de.mintware.barcode_scan/events")
            val plugin = BarcodeScanPlugin(registrar)
            eventChannel.setStreamHandler(plugin);
            channel.setMethodCallHandler(plugin)
            registrar.addActivityResultListener(plugin)
            registrar.addRequestPermissionsResultListener(plugin)
        }
    }

    override fun onMethodCall(call: MethodCall, result: Result) {
        if (call.method == "scan") {
            this.result = result
            showBarcodeView()
        } else if (call.method == "request_permission") {
            result.success(requestCameraAccessIfNecessary())
        } else {
            result.notImplemented()
        }
    }

    private fun showBarcodeView() {
        if (registrar.activity() == null) {
            Log.e("BarcodeScanPlugin", "plugin can't launch scan activity, because plugin is not attached to any activity.")
            return
        }
        val intent = Intent(registrar.activity(), BarcodeScannerActivity::class.java)
        registrar.activity().startActivityForResult(intent, 100)
    }

    override fun onActivityResult(code: Int, resultCode: Int, data: Intent?): Boolean {
        if (code == 100) {
            if (resultCode == Activity.RESULT_OK) {
                val barcode = data?.getStringExtra("SCAN_RESULT")
                barcode?.let { this.result?.success(barcode) }
            } else {
                val errorCode = data?.getStringExtra("ERROR_CODE")
                this.result?.error(errorCode, null, null)
            }
            return true
        }
        return false
    }

    private fun requestCameraAccessIfNecessary(): Boolean {
        val array = arrayOf(Manifest.permission.CAMERA)
        if (ContextCompat.checkSelfPermission(registrar.activity(), Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_GRANTED) {
            return false
        }

        ActivityCompat.requestPermissions(registrar.activity(), array, REQUEST_CAMERA_PERMISSION)
        return true
    }

    override fun onRequestPermissionsResult(requestCode: Int,
                                            permissions: Array<out String>?,
                                            grantResults: IntArray?
    ): Boolean {
        if (requestCode != REQUEST_CAMERA_PERMISSION) {
            return false;
        }

        if (PermissionUtil.verifyPermissions(grantResults)) {
            sink?.success("PERMISSION_GRANTED");
        } else {
            sink?.success("PERMISSION_NOT_GRANTED");
        }
        return true;
    }

    override fun onListen(arguments: Any?, events: EventChannel.EventSink?) {
        sink = events;
    }

    override fun onCancel(arguments: Any?) {
        sink = null;
    }
}

object PermissionUtil {

    /**
     * Check that all given permissions have been granted by verifying that each entry in the
     * given array is of the value [PackageManager.PERMISSION_GRANTED].

     * @see Activity.onRequestPermissionsResult
     */
    fun verifyPermissions(grantResults: IntArray?): Boolean {
        if (grantResults == null) {
            return false;
        }
        // At least one result must be checked.
        if (grantResults.size < 1) {
            return false
        }

        // Verify that each required permission has been granted, otherwise return false.
        for (result in grantResults) {
            if (result != PackageManager.PERMISSION_GRANTED) {
                return false
            }
        }
        return true
    }
}
