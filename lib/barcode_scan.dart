import 'dart:async';

import 'package:barcode_scan/scanner_options.dart';
import 'package:flutter/services.dart';

class BarcodeScanner {
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';
  static const MethodChannel _channel =
      const MethodChannel('com.apptreesoftware.barcode_scan');

  static Future<String> scan({ScanOptions options}) async {
    options = options ?? ScanOptions();
    await _channel.invokeMethod('scan', options.toDynamic());
  }
}
