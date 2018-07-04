import 'dart:async';
import 'dart:io';

import 'package:flutter/services.dart';

enum BarcodeType {
  UPC_A,
  UPC_E,
  EAN_13,
  EAN_8,
  RSS_14,
  CODE_39,
  CODE_93,
  CODE_128,
  ITF,
  CODABAR,
  QR_CODE,
  DATA_MATRIX,
  PDF_417,
}

class BarcodeScanner {
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';
  static const MethodChannel _channel =
      const MethodChannel('com.apptreesoftware.barcode_scan');

  static Future<String> scan({List<BarcodeType> types}) async =>
      await _channel.invokeMethod(
          'scan', <String, String>{"formats": _barcodeListToStringArg(types)});

  static String _barcodeListToStringArg(List<BarcodeType> types) {
    if(Platform.isIOS && types != null) {
      throw new UnimplementedError("BarcodeType specification is not implemented yet for IOS");
    }
    return types
            ?.map((type) => _barcodeTypeToString(type))
            ?.toList()
            ?.join(' ') ??
        '';
  }

  static String _barcodeTypeToString(BarcodeType type) {
    // Remove the Enum name and . from the toString()
    return type.toString().substring(type.toString().indexOf('.') + 1);
  }
}
