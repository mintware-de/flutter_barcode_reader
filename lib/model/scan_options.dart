import '../gen/protos/protos.pb.dart';
import '../model/android_options.dart';

/// Provides options to configure the barcode scanner
class ScanOptions {
  /// This map contains strings which are displayed to the user
  ///
  /// Possible pairs:
  /// - cancel : The text of the cancel button (iOS only)
  //  - flash_on : The text of the flash on button
  //  - flash_off : The Text of the flash off button
  final Map<String, String> strings;

  /// Restrict the supported barcode formats
  final List<BarcodeFormat> restrictFormat;

  /// Index of the camera which should used. -1 uses the default camera
  final int useCamera;

  /// Android specific configuration
  final AndroidOptions android;

  /// Set to true to automatically enable flash on camera start
  final bool autoEnableFlash;

  /// Create a object which represents the scanner options
  const ScanOptions({
    this.restrictFormat = const [],
    this.useCamera = -1,
    this.android = const AndroidOptions(),
    this.autoEnableFlash = false,
    this.strings = const {
      "cancel": "Cancel",
      "flash_on": "Flash on",
      "flash_off": "Flash off",
    },
  })  : assert(restrictFormat != null),
        assert(useCamera != null),
        assert(useCamera >= -1),
        assert(android != null);
}
