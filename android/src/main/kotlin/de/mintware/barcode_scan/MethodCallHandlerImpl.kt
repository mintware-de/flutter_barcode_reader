package de.mintware.barcode_scan

import androidx.annotation.Nullable
import io.flutter.plugin.common.BinaryMessenger
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import java.lang.reflect.Method

class MethodCallHandlerImpl(private val activityHelper: ActivityHelper
) : MethodChannel.MethodCallHandler {

    @Nullable
    private var channel: MethodChannel? = null

    @Suppress("unused")
    fun scan(call: MethodCall, result: MethodChannel.Result) {
        activityHelper.showScannerActivity(result)
    }

    fun startListening(messenger: BinaryMessenger?) {
        if (channel != null) {
            stopListening()
        }

        channel = MethodChannel(messenger, "de.mintware.barcode_scan").apply {
            setMethodCallHandler(this@MethodCallHandlerImpl)
        }
    }

    fun stopListening() {
        if (channel == null) {
            return
        }

        channel!!.setMethodCallHandler(null)
        channel = null
    }

    // region MethodCallHandler

    // This map holds all available methods in this class
    private val methodMap = HashMap<String, Method>()

    // Handles the method call and calls the correct method in this class
    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        if (methodMap.isEmpty()) {
            fetchMethods()
        }

        val method = methodMap[call.method]
        if (null == method) {
            result.notImplemented()
            return
        }

        val args = arrayOfNulls<Any>(2)
        args[0] = call
        args[1] = result

        try {
            method.invoke(this, *args)
        } catch (e: Exception) {
            result.error(call.method, e.message, e)
        }

    }

    // Fetches all methods in this class
    private fun fetchMethods() {
        val c = this::class.java
        val m = c.declaredMethods

        for (method in m) {
            methodMap[method.name] = method
        }
    }
    // endregion
}