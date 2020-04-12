import 'dart:async';

import 'package:flutter/services.dart';

import './model/model.dart';
import 'gen/protos/protos.pb.dart' as proto;

// ignore: avoid_classes_with_only_static_members
/// Barcode scanner plugin
/// Simply call `var barcode = await BarcodeScanner.scan()` to scan a barcode
class BarcodeScanner {
  /// If the user has not granted the access to the camera this code is thrown.
  static const cameraAccessDenied = 'PERMISSION_NOT_GRANTED';

  /// The method channel
  static const MethodChannel _channel =
      MethodChannel('de.mintware.barcode_scan');

  /// Starts the camera for scanning the barcode, shows a preview window and
  /// returns the barcode if one was scanned.
  /// Can throw an exception.
  /// See also [cameraAccessDenied]
  static Future<ScanResult> scan({
    ScanOptions options = const ScanOptions(),
  }) async {
    assert(options != null);
    var config = proto.Configuration()
          ..useCamera = options.useCamera
          ..restrictFormat.addAll(options.restrictFormat)
          ..autoEnableFlash = options.autoEnableFlash
          ..strings.addAll(options.strings)
          ..android = (proto.AndroidConfiguration()
                ..useAutoFocus = options.android.useAutoFocus
                ..aspectTolerance = options.android.aspectTolerance
              /**/)
        /**/;
    var buffer = await _channel.invokeMethod('scan', config?.writeToBuffer());
    var tmpResult = proto.ScanResult.fromBuffer(buffer);
    return ScanResult(
      format: tmpResult.format,
      formatNote: tmpResult.formatNote,
      rawContent: tmpResult.rawContent,
      type: tmpResult.type,
    );
  }

  /// Returns the number of cameras which are available
  /// Use n-1 as the index of the camera which should be used.
  static Future<int> get numberOfCameras {
    return _channel.invokeMethod('numberOfCameras');
  }
}
