package de.mintware.barcode_scan

import android.content.Intent

/**
 * Represents a handler for activity results
 */
interface ActivityResultHandler {

    /**
     * Is called on a activity result
     * @return True if the result was handled, otherwise false.
     */
    fun handle(requestCode: Int, resultCode: Int, data: Intent?): Boolean
}
