package de.mintware.barcode_scan

import androidx.annotation.NonNull
import androidx.annotation.Nullable
import io.flutter.embedding.engine.plugins.FlutterPlugin
import io.flutter.embedding.engine.plugins.activity.ActivityAware
import io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding
import io.flutter.plugin.common.PluginRegistry.Registrar

/** BarcodeScanPlugin */
class BarcodeScanPlugin : FlutterPlugin, ActivityAware {

    @Nullable
    private var channelHandler: ChannelHandler? = null
    @Nullable
    private var activityHelper: ActivityHelper? = null

    override fun onAttachedToEngine(@NonNull flutterPluginBinding: FlutterPlugin.FlutterPluginBinding) {
        activityHelper = ActivityHelper(flutterPluginBinding.applicationContext)

        channelHandler = ChannelHandler(activityHelper!!)
        channelHandler!!.startListening(flutterPluginBinding.binaryMessenger)
    }

    // This static function is optional and equivalent to onAttachedToEngine. It supports the old
    // pre-Flutter-1.12 Android projects. You are encouraged to continue supporting
    // plugin registration via this function while apps migrate to use the new Android APIs
    // post-flutter-1.12 via https://flutter.dev/go/android-project-migration.
    //
    // It is encouraged to share logic between onAttachedToEngine and registerWith to keep
    // them functionally equivalent. Only one of onAttachedToEngine or registerWith will be called
    // depending on the user's project. onAttachedToEngine or registerWith must both be defined
    // in the same class.
    companion object {
        @Suppress("unused")
        @JvmStatic
        fun registerWith(registrar: Registrar) {
            val handler = ChannelHandler(ActivityHelper(
                    registrar.context(),
                    registrar.activity()
            ))
            handler.startListening(registrar.messenger())
        }
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        if (channelHandler == null) {
            return
        }

        channelHandler!!.stopListening()
        channelHandler = null
        activityHelper = null
    }

    override fun onDetachedFromActivity() {
        if (channelHandler == null) {
            return
        }

        activityHelper!!.activity = null
    }

    override fun onReattachedToActivityForConfigChanges(binding: ActivityPluginBinding) {
        onAttachedToActivity(binding)
    }

    override fun onAttachedToActivity(binding: ActivityPluginBinding) {
        if (channelHandler == null) {
            return
        }
        binding.addActivityResultListener(activityHelper!!)
        binding.addRequestPermissionsResultListener(activityHelper!!)
        activityHelper!!.activity = binding.activity
    }

    override fun onDetachedFromActivityForConfigChanges() {
        onDetachedFromActivity()
    }
}
