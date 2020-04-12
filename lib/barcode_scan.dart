import 'dart:async';

import 'package:flutter/services.dart';

/// Barcode scanner plugin
/// Simply call `var barcode = await BarcodeScanner.scan()` to scan a barcode
class BarcodeScanner {
  /// If the user has granted the access to the camera this code is returned.
  static const CameraAccessGranted = 'PERMISSION_GRANTED';

  /// If the user has not granted the access to the camera this code is thrown.
  static const CameraAccessDenied = 'PERMISSION_NOT_GRANTED';

  /// If the user cancel the scan an exception with this code is thrown.
  static const UserCanceled = 'USER_CANCELED';

  /// The method channel
  static const MethodChannel _channel =
      const MethodChannel('de.mintware.barcode_scan');

  /// The event channel
  static const EventChannel _eventChannel =
      const EventChannel('de.mintware.barcode_scan/events');

  /// Starts the camera for scanning the barcode, shows a preview window and
  /// returns the barcode if one was scanned.
  /// Can throw an exception.
  /// See also [CameraAccessDenied] and [UserCanceled]
  static Future<String> scan() async {
    var events = _eventChannel.receiveBroadcastStream();
    var permissionsRequested =
        await _channel.invokeMethod('request_permission');
    if (permissionsRequested) {
      var completer = Completer<String>();

      StreamSubscription subscription;
      subscription = events.listen((event) async {
        if (event is String) {
          if (event == CameraAccessGranted) {
            subscription.cancel();
            completer.complete(await _channel.invokeMethod('scan'));
          } else if (event == CameraAccessDenied) {
            subscription.cancel();
            completer.completeError(
              PlatformException(code: CameraAccessDenied),
            );
          }
        }
      });

      return completer.future;
    } else {
      return await _channel.invokeMethod('scan');
    }
  }
}
