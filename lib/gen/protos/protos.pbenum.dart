///
//  Generated code. Do not modify.
//  source: protos/protos.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

// ignore_for_file: UNDEFINED_SHOWN_NAME,UNUSED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class BarcodeFormat extends $pb.ProtobufEnum {
  static const BarcodeFormat unknown = BarcodeFormat._(0, 'unknown');
  static const BarcodeFormat aztec = BarcodeFormat._(1, 'aztec');
  static const BarcodeFormat code39 = BarcodeFormat._(2, 'code39');
  static const BarcodeFormat code93 = BarcodeFormat._(3, 'code93');
  static const BarcodeFormat ean8 = BarcodeFormat._(4, 'ean8');
  static const BarcodeFormat ean13 = BarcodeFormat._(5, 'ean13');
  static const BarcodeFormat code128 = BarcodeFormat._(6, 'code128');
  static const BarcodeFormat dataMatrix = BarcodeFormat._(7, 'dataMatrix');
  static const BarcodeFormat qr = BarcodeFormat._(8, 'qr');
  static const BarcodeFormat interleaved2of5 = BarcodeFormat._(9, 'interleaved2of5');
  static const BarcodeFormat upce = BarcodeFormat._(10, 'upce');
  static const BarcodeFormat pdf417 = BarcodeFormat._(11, 'pdf417');

  static const $core.List<BarcodeFormat> values = <BarcodeFormat> [
    unknown,
    aztec,
    code39,
    code93,
    ean8,
    ean13,
    code128,
    dataMatrix,
    qr,
    interleaved2of5,
    upce,
    pdf417,
  ];

  static final $core.Map<$core.int, BarcodeFormat> _byValue = $pb.ProtobufEnum.initByValue(values);
  static BarcodeFormat valueOf($core.int value) => _byValue[value];

  const BarcodeFormat._($core.int v, $core.String n) : super(v, n);
}

class ResultType extends $pb.ProtobufEnum {
  static const ResultType Barcode = ResultType._(0, 'Barcode');
  static const ResultType Cancelled = ResultType._(1, 'Cancelled');
  static const ResultType Error = ResultType._(2, 'Error');

  static const $core.List<ResultType> values = <ResultType> [
    Barcode,
    Cancelled,
    Error,
  ];

  static final $core.Map<$core.int, ResultType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ResultType valueOf($core.int value) => _byValue[value];

  const ResultType._($core.int v, $core.String n) : super(v, n);
}

