# Barcode Scanner

A flutter plugin for scanning 2D barcodes and QR codes. 

This provides a simple wrapper for two commonly used iOS and Android libraries:

iOS: https://github.com/mikebuss/MTBBarcodeScanner

Android: https://github.com/dm77/barcodescanner

### Features
- [x] Scan 2D barcodes
- [x] Scan QR codes
- [x] Control the flash while scanning
- [ ] Customize the permission request text
- [ ] Support multiple barcode libraries

## Getting Started

### Android
For Android, you must do the following before you can use the plugin:

* Add the camera permission to your AndroidManifest.xml
     
     `<uses-permission android:name="android.permission.CAMERA" />`

* Add the Barcode activity to your AndroidManifest.xml
    
     `<activity android:name="com.apptreesoftware.barcodescan.BarcodeScannerActivity"/>`
     
### iOS
To use on iOS, you must add the the camera usage description to your Info.plist

    <key>NSCameraUsageDescription</key>
    <string>Camera permission is required for barcode scanning.</string>
