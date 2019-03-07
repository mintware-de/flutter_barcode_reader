import 'dart:async';

import 'package:barcode_scan/barcode_scan.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(new MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var barcode;

  @override
  initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new Scaffold(
          appBar: new AppBar(
            title: new Text('Barcode Scanner Example'),
          ),
          body: new Center(
            child: new Column(
              children: <Widget>[
                new Container(
                  child: new MaterialButton(
                      onPressed: ()async{
                       await scan(1);
          }, child: new Text("Scan")),
                  padding: const EdgeInsets.all(8.0),
                ),

                new Container(
                  child: new MaterialButton(
                      onPressed: ()async{
                       await scan(2);
                      }, child: new Text("Multi Scan")),
                  padding: const EdgeInsets.all(8.0),
                ),
                new Text(barcode.toString()??""),
              ],
            ),
          )),
    );
  }

  Future scan(int type) async {
    try {
      if(type==1){
        String barcode = await BarcodeScanner.scan();
        print("**$barcode");
        setState(() => this.barcode = barcode);

      }else{
        var barcode = await BarcodeScanner.multiScan();
        print("*L*$barcode");
        setState(() => this.barcode = barcode);

      }

    } on PlatformException catch (e) {
      if (e.code == BarcodeScanner.CameraAccessDenied) {
        setState(() {
          this.barcode = 'The user did not grant the camera permission!';
        });
      } else {
        setState(() => this.barcode = 'Unknown error: $e');
      }
    } on FormatException{
      setState(() => this.barcode = 'null (User returned using the "back"-button before scanning anything. Result)');
    } catch (e) {
      setState(() => this.barcode = 'Unknown error: $e');
    }
  }
}
