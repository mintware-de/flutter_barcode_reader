package de.mintware.barcode_scan

import android.app.Activity
import android.content.Intent
import android.util.Log
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.MethodChannel.MethodCallHandler
import io.flutter.plugin.common.MethodChannel.Result
import io.flutter.plugin.common.PluginRegistry
import io.flutter.plugin.common.PluginRegistry.Registrar

class BarcodeScanPlugin(private val registrar: Registrar) : MethodCallHandler, PluginRegistry.ActivityResultListener {
    var result: Result? = null

    companion object {
        @JvmStatic
        fun registerWith(registrar: Registrar) {
            val channel = MethodChannel(registrar.messenger(), "de.mintware.barcode_scan")
            val plugin = BarcodeScanPlugin(registrar)
            channel.setMethodCallHandler(plugin)
            registrar.addActivityResultListener(plugin)
        }
    }

    override fun onMethodCall(call: MethodCall, result: Result) {
        if (call.method == "scan") {
            this.result = result
            showBarcodeView()
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
}
