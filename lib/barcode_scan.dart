import 'dart:async';

import 'package:flutter/services.dart';

class BarcodeScanner {
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';
  static const UserCanceled = 'USER_CANCELED';
  static const MethodChannel _channel =
      const MethodChannel('com.apptreesoftware.barcode_scan');
  static Future<String> scan({bool flash = false}) async => await _channel.invokeMethod('scan', <String, dynamic>{'flash': flash});
}
