import 'dart:async';

import 'package:flutter/services.dart';

enum BarcodeTranslationKey { cancel, flashOff, flashOn }

class BarcodeScanner {
  static final translations = <BarcodeTranslationKey, String>{
    BarcodeTranslationKey.cancel: "Cancel",
    BarcodeTranslationKey.flashOff: "Flash off",
    BarcodeTranslationKey.flashOn: "Flash on"
  };
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';
  static const MethodChannel _channel = const MethodChannel('com.apptreesoftware.barcode_scan');
  static Future<String> scan() async {
    final translations =
        BarcodeScanner.translations.map((key, value) => MapEntry(key.toString(), value));
    return await _channel.invokeMethod('scan', {"translations": translations});
  }
}
