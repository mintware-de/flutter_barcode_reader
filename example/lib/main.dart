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
  String barcode = "No code was scanned";
  int numberOfCameras = 0;
  int selectedCamera = -1;

  List<BarcodeFormat> selectedFormats = [...BarcodeFormat.values];

  @override
  initState() {
    super.initState();
    Future.delayed(Duration.zero, () async {
      numberOfCameras = await BarcodeScanner.numberOfCameras;
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> contentList = [
      ListTile(
        title: Text("Camera selection"),
        dense: true,
        enabled: false,
      ),
      RadioListTile(
        onChanged: (v) => setState(() => selectedCamera = -1),
        value: -1,
        title: Text("Default camera"),
        groupValue: selectedCamera,
      )
    ];

    for (var i = 0; i < numberOfCameras; i++) {
      contentList.add(RadioListTile(
        onChanged: (v) => setState(() => selectedCamera = i),
        value: i,
        title: Text("Camera ${i + 1}"),
        groupValue: selectedCamera,
      ));
    }
    contentList.add(ListTile(
      trailing: Checkbox(
        tristate: true,
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        value: selectedFormats.length == BarcodeFormat.values.length
            ? true
            : selectedFormats.length == 0 ? false : null,
        onChanged: (bool i) {
          setState(() {
            selectedFormats = (i ?? false) ? [...BarcodeFormat.values] : [];
          });
        },
      ),
      dense: true,
      enabled: false,
      title: Text("Detect barcode formats"),
      subtitle: Text(
          "If all are unselected, all possible platform formats will be used"),
    ));

    BarcodeFormat.values.forEach((format) {
      contentList.add(CheckboxListTile(
        value: selectedFormats.contains(format),
        onChanged: (i) {
          setState(() => selectedFormats.contains(format)
              ? selectedFormats.remove(format)
              : selectedFormats.add(format));
        },
        title: Text(format.toString()),
      ));
    });

    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('Barcode Scanner Example'),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.camera),
              tooltip: "Scan",
              onPressed: scan,
            )
          ],
          bottom: AppBar(
            title: Text(barcode),
            elevation: 0,
          ),
        ),
        body: ListView(
          scrollDirection: Axis.vertical,
          shrinkWrap: true,
          children: contentList,
        ),
      ),
    );
  }

  Future scan() async {
    try {
      var config = Configuration();
      config.cancelText = 'Cancel';
      config.flashOnText = 'Flash on';
      config.flashOffText = 'Flash off';
      config.restrictFormat.addAll(selectedFormats);
      config.useCamera = selectedCamera;
      String barcode = await BarcodeScanner.scan(config: config);

      setState(() => this.barcode = barcode);
    } on PlatformException catch (e) {
      if (e.code == BarcodeScanner.CameraAccessDenied) {
        setState(() {
          this.barcode = 'The user did not grant the camera permission!';
        });
      } else {
        setState(() => this.barcode = 'Unknown error: $e');
      }
    } on FormatException {
      setState(() => this.barcode =
          'null (User returned using the "back"-button before scanning anything. Result)');
    } catch (e) {
      setState(() => this.barcode = 'Unknown error: $e');
    }
  }
}
