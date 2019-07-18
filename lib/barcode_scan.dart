import 'dart:async';

import 'package:flutter/services.dart';

class BarcodeScanner {
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';
  static const MethodChannel _channel = const MethodChannel('com.apptreesoftware.barcode_scan');
  //0 back , 1 front
  static Future<String> scan({int cam = 0}) async => await _channel.invokeMethod('scan', cam);
}
