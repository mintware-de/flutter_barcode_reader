package de.mintware.barcode_scan

import android.hardware.Camera
import androidx.annotation.Keep
import androidx.annotation.Nullable
import io.flutter.plugin.common.BinaryMessenger
import io.flutter.plugin.common.EventChannel
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import java.lang.reflect.Method

class ChannelHandler(private val activityHelper: ActivityHelper
) : MethodChannel.MethodCallHandler, EventChannel.StreamHandler {

    @Nullable
    private var methodChannel: MethodChannel? = null

    @Nullable
    private var eventChannel: EventChannel? = null

    @Nullable
    private var sink: EventChannel.EventSink? = null

    @Keep
    @Suppress("unused", "UNUSED_PARAMETER")
    fun scan(call: MethodCall, result: MethodChannel.Result) {
        var config: Protos.Configuration = Protos.Configuration.newBuilder()
                .putAllStrings(mapOf(
                        "cancel" to "Cancel",
                        "flash_on" to "Flash on",
                        "flash_off" to "Flash off"
                ))
                .setAndroid(Protos.AndroidConfiguration
                        .newBuilder()
                        .setAspectTolerance(0.5)
                        .setUseAutoFocus(true))
                .addAllRestrictFormat(mutableListOf())
                .setUseCamera(-1)
                .build()

        if (call.arguments is ByteArray) {
            config = Protos.Configuration.parseFrom(call.arguments as ByteArray)
        }
        activityHelper.showScannerActivity(result, config)
    }

    @Keep
    @Suppress("unused", "UNUSED_PARAMETER")
    fun numberOfCameras(call: MethodCall, result: MethodChannel.Result) {
        result.success(Camera.getNumberOfCameras())
    }

    @Keep
    @Suppress("unused", "UNUSED_PARAMETER")
    fun requestCameraPermission(call: MethodCall, result: MethodChannel.Result) {
        result.success(activityHelper.requestCameraAccessIfNecessary(sink))
    }

    fun startListening(messenger: BinaryMessenger?) {
        if (methodChannel != null) {
            stopListening()
        }

        methodChannel = MethodChannel(messenger, "de.mintware.barcode_scan").apply {
            setMethodCallHandler(this@ChannelHandler)
        }

        if (eventChannel != null) {
            stopListening()
        }

        eventChannel = EventChannel(messenger, "de.mintware.barcode_scan/events").apply {
            setStreamHandler(this@ChannelHandler)
        }
    }

    fun stopListening() {
        if (methodChannel != null) {
            methodChannel!!.setMethodCallHandler(null)
            methodChannel = null
        }

        if (eventChannel != null) {
            eventChannel!!.setStreamHandler(null)
            eventChannel = null
        }
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

    // region StreamHandler

    override fun onListen(arguments: Any?, events: EventChannel.EventSink?) {
        sink = events
    }

    override fun onCancel(arguments: Any?) {
        sink = null
    }
    // endregion
}
