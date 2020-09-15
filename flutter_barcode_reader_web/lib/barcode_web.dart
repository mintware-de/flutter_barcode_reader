@JS()
library jsqrscanner;

import 'dart:async';
import 'dart:html';
import 'dart:js';
import 'dart:typed_data';

import 'package:barcode_scan/gen/protos/protos.pb.dart' as proto;

import 'package:flutter/services.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

class BarcodeScanPlugin {
  Completer<Uint8List> _completer;
  JsQRScanner _scanner;
  int _useCamera = -1;
  List<dynamic> _cameras = new List<dynamic>();

  static void registerWith(Registrar registrar) {
    final MethodChannel channel = MethodChannel(
      'de.mintware.barcode_scan',
      const StandardMethodCodec(),
      registrar.messenger
    );
    final BarcodeScanPlugin instance = new BarcodeScanPlugin();
    channel.setMethodCallHandler(instance.handleMethodCall);
  }

  Future<dynamic> handleMethodCall(MethodCall call) async {
    switch (call.method) {
      case "numberOfCameras": return getNumberOfCameras();
      default: return callScan(call);
    }
  }

  Future<int> getNumberOfCameras() {
    Completer<int> completer = new Completer<int>();
    _getCameras().then((cameras) => completer.complete(cameras.length));
    return completer.future;
  }

  Future<Iterable<dynamic>> _getCameras() {
    Completer<Iterable<dynamic>> completer = new Completer<Iterable<dynamic>>();
    window.navigator.mediaDevices.enumerateDevices().then((devices) {
      completer.complete(devices.where((device) => device.kind == 'videoinput'));
    }).catchError((error) {
      completer.complete([]);
    });
    return completer.future;
  }

  Future<Uint8List> callScan(MethodCall call) {
    var config;
    if (call.arguments is Uint8List) {
      var buffer = call.arguments as Uint8List;
      config = proto.Configuration.fromBuffer(buffer);
    } else {
      config = proto.Configuration()
        ..useCamera = -1;
    }
    return scan(config);
  }

  Future<Uint8List> scan(proto.Configuration config) {
    _useCamera = config.useCamera;
    _ensureMediaDevicesSupported();
    _createCSS();
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    document.querySelector('head').append(script);
    script.setAttribute('src', 'assets/packages/barcode_scan_web/assets/jsqrscanner.nocache.js');
    _createHTML();
    document.querySelector('#toolbar p').addEventListener('click', (event) => _onCloseByUser());
    setProperty(window, 'JsQRScannerReady', allowInterop(this.scannerReady));
    _completer = new Completer<Uint8List>();
    return _completer.future;
  }

  void _ensureMediaDevicesSupported() {
    if (window.navigator.mediaDevices == null) {
      _completeWithError('CAMERA_ACCESS_NOT_SUPPORTED');
    }
  }

  void _createCSS() {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'assets/packages/barcode_scan_web/assets/styles.css');
    document.querySelector('head').append(link);
  }

  void _createHTML() {
    var containerDiv = document.createElement('div');
    containerDiv.id = 'container';
    containerDiv.innerHtml = '''
    <div id="toolbar">
      <p>X</p>
      <div id="clear"></div>
    </div>
    <div id="scanner"></div>
    <div id="cover">
      <div id="topleft"></div>
      <div id="lefttop"></div>
      <div id="topright"></div>
      <div id="righttop"></div>
      <div id="bottomleft"></div>
      <div id="leftbottom"></div>
      <div id="bottomright"></div>
      <div id="rightbottom"></div>
    </div>
    ''';
    document.body.append(containerDiv);
  }

  void onQRCodeScanned(String scannedText) {
    if (!_completer.isCompleted) {
      var scanResult = proto.ScanResult()
        ..type = proto.ResultType.Barcode
        ..format = proto.BarcodeFormat.qr
        ..rawContent = scannedText;
      _completeWithResult(scanResult);
    }
  }

  void _onCloseByUser() {
    var scanResult = proto.ScanResult()
      ..type = proto.ResultType.Cancelled;
    _completeWithResult(scanResult);
  }

  void _close() {
    if (_scanner != null) {
      _scanner.removeFrom(document.getElementById('scanner'));
      _scanner.stopScanning();
    }
    document.getElementById('container').remove();
  }

  void scannerReady() {
    window.navigator.getUserMedia(video: true).then((stream) {
      window.navigator.mediaDevices.enumerateDevices().then((devices) {
        _cameras = devices.where((device) => device.kind == 'videoinput').toList();
        _scanner = JsQRScanner(allowInterop(this.onQRCodeScanned), allowInterop(this.provideVideo));
        _scanner.setSnapImageMaxSize(300);
        var scannerParentElement = document.getElementById('scanner');
        _scanner.appendTo(scannerParentElement);
      }).catchError((onError) => _reject(onError));
    }).catchError((onError) => _reject(onError));
  }

  Promise<MediaStream> provideVideo() {
    var videoPromise;
    if (_useCamera < 0) {
      videoPromise = getUserMedia(new UserMediaOptions(video: new VideoOptions(facingMode: 'environment')));
    } else {
      videoPromise = getUserMedia(new UserMediaOptions(video: new VideoOptions(deviceId: new DeviceIdOptions(exact: _cameras[_useCamera].deviceId))));
    }
    videoPromise.then(null, allowInterop(_reject));
    return videoPromise;
  } 

  void _reject(reject) {
    _completeWithError('PERMISSION_NOT_GRANTED');
  }

  void _completeWithError(String errorCode) {
    var scanResult = proto.ScanResult()
      ..type = proto.ResultType.Error
      ..format = proto.BarcodeFormat.unknown
      ..rawContent = errorCode;
    _completeWithResult(scanResult);
  }

  void _completeWithResult(proto.ScanResult scanResult) {
    _completer.complete(scanResult.writeToBuffer());
    _close();
  }
}

@JS("navigator.mediaDevices.getUserMedia")
external Promise<MediaStream> getUserMedia(UserMediaOptions options);

@JS()
@anonymous
class UserMediaOptions {
  external VideoOptions get video;

  external factory UserMediaOptions({ VideoOptions video });
}

@JS()
@anonymous
class VideoOptions {
  external String get facingMode;
  external DeviceIdOptions get deviceId;

  external factory VideoOptions({ String facingMode = null, DeviceIdOptions deviceId = null });
}

@JS()
@anonymous
class DeviceIdOptions {
  external String get exact;

  external factory DeviceIdOptions({ String exact });
}

@JS()
class JsQRScanner {
  external factory JsQRScanner(Function onQRCodeScanned, Function provideVideo);
  external setSnapImageMaxSize(int maxSize);
  external removeFrom(Element element);
  external appendTo(Element element);
  external stopScanning();
}

@JS()
class Promise<T> {
  external Promise(void executor(void resolve(T result), Function reject));
  external Promise then(void onFulfilled(T result), [Function onRejected]);
}