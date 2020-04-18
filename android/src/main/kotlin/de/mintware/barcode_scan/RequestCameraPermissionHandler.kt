package de.mintware.barcode_scan

import android.content.pm.PackageManager
import de.mintware.barcode_scan.ActivityHelper.Companion.REQ_CAMERA_PERMISSION
import io.flutter.plugin.common.EventChannel
import io.flutter.plugin.common.PluginRegistry

class RequestCameraPermissionHandler(private val sink: EventChannel.EventSink?
) : PluginRegistry.RequestPermissionsResultListener {

    override fun onRequestPermissionsResult(requestCode: Int,
                                            permissions: Array<out String>?,
                                            grantResults: IntArray?
    ): Boolean {
        if (requestCode != REQ_CAMERA_PERMISSION) {
            return false
        }

        if (verifyPermissions(grantResults)) {
            sink?.success("PERMISSION_GRANTED")
        } else {
            sink?.success("PERMISSION_NOT_GRANTED")
        }
        return true
    }

    /**
     * Check that all given permissions have been granted by verifying that each entry in the
     * given array is of the value [PackageManager.PERMISSION_GRANTED].

     * @see onRequestPermissionsResult
     */
    private fun verifyPermissions(grantResults: IntArray?): Boolean {
        if (grantResults == null) {
            return false
        }
        // At least one result must be checked.
        if (grantResults.isEmpty()) {
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