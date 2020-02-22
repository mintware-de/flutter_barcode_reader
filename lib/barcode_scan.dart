import 'dart:async';

import 'package:barcode_scan/gen/protos/protos.pb.dart';
import 'package:flutter/services.dart';

export 'package:barcode_scan/gen/protos/protos.pb.dart';

/// Barcode scanner plugin
/// Simply call `var barcode = await BarcodeScanner.scan()` to scan a barcode
class BarcodeScanner {
  /// If the user has not granted the access to the camera this code is thrown.
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';

  /// If the user cancel the scan an exception with this code is thrown.
  static const UserCanceled = 'USER_CANCELED';

  /// The method channel
  static const MethodChannel _channel =
      const MethodChannel('de.mintware.barcode_scan');

  /// Starts the camera for scanning the barcode, shows a preview window and
  /// returns the barcode if one was scanned.
  /// Can throw an exception.
  /// See also [CameraAccessDenied] and [UserCanceled]
  static Future<String> scan({Configuration config}) async =>
      await _channel.invokeMethod('scan', config?.writeToBuffer());

  /// Returns the number of cameras which are available
  /// Use n-1 as the index of the camera which should be used.
  static Future<int> get numberOfCameras =>
      _channel.invokeMethod('numberOfCameras');
}
