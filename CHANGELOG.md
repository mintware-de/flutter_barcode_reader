## v3.0.1 - 2020-05-08

Features:
- [Added cancel for ux](https://github.com/mintware-de/flutter_barcode_reader/pull/198) - @iRaySpace

Bugfixes:
- [Fix autofocus crash](https://github.com/mintware-de/flutter_barcode_reader/pull/228) - @oznecniV97
- [Fix camera selection in Android](https://github.com/mintware-de/flutter_barcode_reader/pull/231) - @GabrieleVolpato

## v3.0.0 - 2020-04-18

Bugfixes:
- [Add @Keep annotation](https://github.com/mintware-de/flutter_barcode_reader/pull/214) to fix "No implementation for method requestCameraPermission" - @devtronic

## v3.0.0-dev.3 - 2020-04-14

Bugfixes:
- [App crash on orientation change](https://github.com/mintware-de/flutter_barcode_reader/pull/209) - @subinsv

## v3.0.0-dev.2 - 2020-04-12

Migrated the changes of the 2.0.0 track 

- Fixed the request camera permission flow on Android

Updated also the Flutter env. SDK constraint to ">=2.1.0 <3.0.0" 

## v3.0.0-dev.1 - 2020-04-12

Changes:
- [Rewrite platform communication](https://github.com/mintware-de/flutter_barcode_reader/pull/185) - @devtronic
  - This provides a better way to configure the plugin
  - iOS code migrated to Swift
  - Android code migrated to FlutterPlugin
  - Platform communication with protobuf
  - Retrieve the number of available cameras with `BarcodeScanner.numberOfCameras`
  - Flexible configuration:
  - Set the strings for the flash on/off and the cancel button
  - Restrict the detected barcode formats
  - Set which camera is used for scanning barcodes

**BREAKING CHANGES**:
- minSdk version on Android is now 18
- `BarcodeScanner.scan()` returns a `ScanResult` object. Check [UPGRADE.md](./UPGRADE.md) for migration details.

## v2.0.2 - 2020-04-14

Bugfixes:
- [Fixed the request camera permission flow on Android](https://github.com/mintware-de/flutter_barcode_reader/pull/186) - @devtronic

## v2.0.1 - 2020-02-19

Bugfixes:
- Fixed wrong build.gradle

## v2.0.0 - 2020-02-19

Features:
- [Add-to-app support](https://github.com/mintware-de/flutter_barcode_reader/pull/168) - @santiihoyos
- Changed overlay to full screen in iOS 13

Bugfixes:
- [Fixed rotation on iOS](https://github.com/mintware-de/flutter_barcode_reader/pull/167) - @mintware-de
  - [#61 Rotating orientation on iPhones only shows half the screen](https://github.com/mintware-de/flutter_barcode_reader/issues/61)

Changes:
- [Fix compile warning](https://github.com/mintware-de/flutter_barcode_reader/pull/127) - @lookfirst
- [Upgrade gradle](https://github.com/mintware-de/flutter_barcode_reader/pull/142) - @SuuSoJeat
  - `com.android.tools.build:gradle`: 3.3.1 -> 3.5.0
  - `org.jetbrains.kotlin:kotlin-gradle-plugin`: 1.3.20 -> 1.3.50
  - `compileSdkVersion`: 28 -> 29
  - `targetSdkVersion`: 28 -> 29
  - `gradle`: 4.10.2 -> 5.4.1
- [Package description updated](https://github.com/mintware-de/flutter_barcode_reader/pull/180) - @connectety
- README.md and LICENSE.md updated
- Since the project owner has been changed, the package names are different. Checkout the [UPGRADE.md](./UPGRADE.md) for details.

## v1.0.0 - 2018-08-30

Breaking Change: Adds support for AndroidX

## v0.0.8 - 2018-08-30

* Fixes [iOS: pressing cancel doesn't stop scanning](https://github.com/mintware-de/flutter_barcode_reader/issues/60) thanks to @tgezginis.

## v0.0.7 - 2018-08-30

* Fix iOS barcodes not scanning

## v0.0.6 - 2018-08-29

* Fix android dependencies
* iOS scanner now looks like Android thanks to @dustin-graham 

## v0.0.4 - 2018-02-8

* Fix missing gradle dependency (thanks to [toteto](https://github.com/mintware-de/flutter_barcode_reader/pull/15))
* Update gradle dependencies

## v0.0.3 - 2017-02-8

* Improved permission handling (thanks to [BenSower](https://github.com/BenSower))
* Added MIT license

## v0.0.2 - 2017-11-7

* Rewrite iOS scanner in Objective-C to avoid Swift use_frameworks! conflicts with other plugins (see https://github.com/flutter/flutter/issues/10968)

## v0.0.1 - 2017-10-29

* Supports 2D & QR Codes
* Control flash while scanning
