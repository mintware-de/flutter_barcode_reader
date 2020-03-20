@JS()
library jsqrscanner;

import 'dart:async';
import 'dart:html';

import 'package:flutter/services.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

class BarcodeScanPlugin {
  Completer<String> _completer;
  JsQRScanner _scanner;

  static void registerWith(Registrar registrar) {
    final MethodChannel channel = MethodChannel(
      'de.mintware.barcode_scan',
      const StandardMethodCodec(),
      registrar.messenger
    );
    final BarcodeScanPlugin instance = new BarcodeScanPlugin();
    channel.setMethodCallHandler(instance.handleMethodCall);
  }

  Future<String> handleMethodCall(MethodCall call) async {
    _createCSS();
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    document.querySelector('head').append(script);
    script.setAttribute('src', 'assets/packages/barcode_scan_web/assets/jsqrscanner.nocache.js');
    _createHTML();
    document.querySelector('#toolbar p').addEventListener('click', (event) => _close());
    setProperty(window, 'JsQRScannerReady', allowInterop(this.scannerReady));
    _completer = new Completer<String>();
    return _completer.future;
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
    _completer.complete(scannedText);
    _close();
  }

  void _close() {
    if (_scanner != null) {
      _scanner.removeFrom(document.getElementById('scanner'));
      _scanner.stopScanning();
    }
    document.getElementById('container').remove();
  }

  void scannerReady() {
    _scanner = JsQRScanner(allowInterop(this.onQRCodeScanned), allowInterop(this.provideVideo));
    _scanner.setSnapImageMaxSize(300);
    var scannerParentElement = document.getElementById('scanner');
    _scanner.appendTo(scannerParentElement);
  }

  Promise<MediaStream> provideVideo() {
    return new Promise<MediaStream>(allowInterop((resolve, reject) {
      window.navigator.getUserMedia(video: true).then(resolve, onError: reject);
    }));
  } 
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