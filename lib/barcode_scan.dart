import 'dart:async';

import 'package:flutter/services.dart';

class BarcodeScanner {
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';
  static const MethodChannel _channel =
      const MethodChannel('com.apptreesoftware.barcode_scan');

  static Future<String> scan(
          [String flashOnText = "Flash On",
          String flashOffText = "Flash Off"]) async =>
      await _channel.invokeMethod('scan', {
        "flashOnText": flashOnText,
        "flashOffText": flashOffText,
      });
}
