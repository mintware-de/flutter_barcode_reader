# Barcode Scanner

A flutter plugin for scanning 2D barcodes and QR codes. 

This provides a simple wrapper for two commonly used iOS and Android libraries:

iOS: https://github.com/mikebuss/MTBBarcodeScanner

Android: https://github.com/dm77/barcodescanner

### Features
- [x] Scan 2D barcodes
- [x] Scan QR codes
- [x] Control the flash while scanning
- [x] Permission handling
- [ ] Support multiple barcode libraries

## Getting Started

### Android
For Android, you must do the following before you can use the plugin:

* Add the camera permission to your AndroidManifest.xml
     
     `<uses-permission android:name="android.permission.CAMERA" />`

* Add the BarcodeScanner activity to your AndroidManifest.xml. Do NOT modify the name.
    
     `<activity android:name="com.apptreesoftware.barcodescan.BarcodeScannerActivity"/>`
     

* This plugin is written in Kotlin. Therefore, you need to add Kotlin support to your project. See [installing the Kotlin plugin](https://kotlinlang.org/docs/tutorials/kotlin-android.html#installing-the-kotlin-plugin).

Edit your project-level build.gradle file to look like this:

	buildscript {
	    ext.kotlin_version = '1.3.21'
	    ...
	    dependencies {
	        ...
	        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
	    }
	}
	...

Edit your app-level build.gradle file to look like this:

	apply plugin: 'kotlin-android'
	...
	dependencies {
	    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
	    ...
	}

Now you can depend on the barcode_scan plugin in your pubspec.yaml file:

	dependencies:
	  ...
	  barcode_scan: any

Click "Packages get" in Android Studio or run `flutter packages get` in your project folder.

### iOS
To use on iOS, you must add the the camera usage description to your Info.plist

    <key>NSCameraUsageDescription</key>
    <string>Camera permission is required for barcode scanning.</string>
