import 'dart:async';

import 'package:flutter/services.dart';

class BarcodeScanner
{
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';

  static const MethodChannel _channel = const MethodChannel('com.apptreesoftware.barcode_scan');

  static Future<BarcodeScannerResult> scan() async
  {
    try
    {
      var barcode = await _channel.invokeMethod('scan');
      return Future.value(BarcodeScannerResult(barcode:barcode));
    }
    on PlatformException catch (e)
    {
      if (e.code == BarcodeScanner.CameraAccessDenied)
        return Future.value(BarcodeScannerResult(error:BarcodeScannerError.CameraAccessDenied));
    }
    return Future.value(BarcodeScannerResult(error:BarcodeScannerError.Other));
  }
}

enum BarcodeScannerError
{
  None,
  CameraAccessDenied,
  Other
}

class BarcodeScannerResult
{
  String barcode;
  BarcodeScannerError error;

  BarcodeScannerResult({this.barcode,this.error=BarcodeScannerError.None});
}
