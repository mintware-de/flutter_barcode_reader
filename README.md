[![GitHub license](https://img.shields.io/github/license/mintware-de/flutter_barcode_reader.svg)](https://github.com/mintware-de/flutter_barcode_reader/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/mintware-de/flutter_barcode_reader)](https://github.com/mintware-de/flutter_barcode_reader/stargazers)
[![Pub](https://img.shields.io/pub/v/barcode_scan.svg)](https://pub.dartlang.org/packages/barcode_scan)
[![GitHub forks](https://img.shields.io/github/forks/mintware-de/flutter_barcode_reader)](https://github.com/mintware-de/flutter_barcode_reader/network)

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

## Getting Started

### Android
For Android, you must do the following before you can use the plugin:

* Add the camera permission to your AndroidManifest.xml
     
     `<uses-permission android:name="android.permission.CAMERA" />`

* This plugin is written in Kotlin. Therefore, you need to add Kotlin support to your project. See [installing the Kotlin plugin](https://kotlinlang.org/docs/tutorials/kotlin-android.html#installing-the-kotlin-plugin).

Edit your project-level build.gradle file to look like this:
```groovy
buildscript {
    ext.kotlin_version = '1.3.61'
    // ...
    dependencies {
        // ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}
// ...
```

Edit your app-level build.gradle file to look like this:

```groovy
apply plugin: 'kotlin-android'
// ...
dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
    // ...
}
```

Now you can depend on the barcode_scan plugin in your pubspec.yaml file:

```yaml
dependencies:
    # ...
    barcode_scan: any
```
Click "Packages get" in Android Studio or run `flutter packages get` in your project folder.

### iOS
To use on iOS, you must add the the camera usage description to your Info.plist

```xml
<dict>
    <!-- ... -->
    <key>NSCameraUsageDescription</key>
    <string>Camera permission is required for barcode scanning.</string>
    <!-- ... -->
</dict>
```


## Usage

```dart

import 'package:barcode_scan/barcode_scan.dart';

void main() async {
  var result = await BarcodeScanner.scan();
  
  print(result.type); // The result type (barcode, cancelled, failed)
  print(result.rawContent); // The barcode content
  print(result.format); // The barcode format (as enum)
  print(result.formatNote); // If a unknown format was scanned this field contains a note
}
```


## Advanced usage
You can pass options to the scan method:

```dart

import 'package:barcode_scan/barcode_scan.dart';

void main() async {
  
  var options = ScanOptions(
    // set the options
  );

  var result = await BarcodeScanner.scan(options: options);
  
  // ...
}
```

### Supported options
| Option                     | Type              | Description                                                                               | Supported by  |
|----------------------------|-------------------|-------------------------------------------------------------------------------------------|---------------|
| `strings.cancel`           | `String`          | The cancel button text on iOS                                                             | iOS only      |
| `strings.flash_on`         | `String`          | The flash on button text                                                                  | iOS + Android |
| `strings.flash_off`        | `String`          | The flash off button text                                                                 | iOS + Android |
| `restrictFormat`           | `BarcodeFormat[]` | Restrict the formats which are recognized                                                 | iOS + Android |
| `useCamera`                | `int`             | The index of the camera which is used for scanning (See `BarcodeScanner.numberOfCameras`) | iOS + Android |
| `autoEnableFlash`          | `bool`            | Enable the flash when start scanning                                                      | iOS + Android |
| `android.aspectTolerance`  | `double`          | Enable the flash when start scanning                                                      | Android only  |
| `android.useAutoFocus`     | `bool`            | Enable the flash when start scanning                                                      | Android only  |

## Development setup

###  Setup protobuf

Mac:
```bash
$ brew install protobuf
$ brew install swift-protobuf
```
Windows / Linux: https://github.com/protocolbuffers/protobuf#protocol-compiler-installation


Activate the protobuf dart plugin:
`$ pub global activate protoc_plugin`

Install the`Protobuf Support` plugin for IDEA / Android Studio or `vscode-proto3` for VS Code

If you changed the protos.proto you've to execute the ./generate_proto.sh to update the dart / swift sources






## Common problems
### Android "Could not find org.jetbrains.kotlin:kotlin-stdlib-jre..."
Change `org.jetbrains.kotlin:kotlin-stdlib-jre` to `org.jetbrains.kotlin:kotlin-stdlib-jdk`
([StackOverflow](https://stackoverflow.com/a/53358817))