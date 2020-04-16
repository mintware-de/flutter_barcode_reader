///
//  Generated code. Do not modify.
//  source: protos/protos.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'protos.pbenum.dart';

export 'protos.pbenum.dart';

class AndroidConfiguration extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AndroidConfiguration', createEmptyInstance: create)
    ..a<$core.double>(1, 'aspectTolerance', $pb.PbFieldType.OD, protoName: 'aspectTolerance')
    ..aOB(2, 'useAutoFocus', protoName: 'useAutoFocus')
    ..hasRequiredFields = false
  ;

  AndroidConfiguration._() : super();
  factory AndroidConfiguration() => create();
  factory AndroidConfiguration.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AndroidConfiguration.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AndroidConfiguration clone() => AndroidConfiguration()..mergeFromMessage(this);
  AndroidConfiguration copyWith(void Function(AndroidConfiguration) updates) => super.copyWith((message) => updates(message as AndroidConfiguration));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AndroidConfiguration create() => AndroidConfiguration._();
  AndroidConfiguration createEmptyInstance() => create();
  static $pb.PbList<AndroidConfiguration> createRepeated() => $pb.PbList<AndroidConfiguration>();
  @$core.pragma('dart2js:noInline')
  static AndroidConfiguration getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AndroidConfiguration>(create);
  static AndroidConfiguration _defaultInstance;

  @$pb.TagNumber(1)
  $core.double get aspectTolerance => $_getN(0);
  @$pb.TagNumber(1)
  set aspectTolerance($core.double v) { $_setDouble(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAspectTolerance() => $_has(0);
  @$pb.TagNumber(1)
  void clearAspectTolerance() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get useAutoFocus => $_getBF(1);
  @$pb.TagNumber(2)
  set useAutoFocus($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasUseAutoFocus() => $_has(1);
  @$pb.TagNumber(2)
  void clearUseAutoFocus() => clearField(2);
}

class Configuration extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Configuration', createEmptyInstance: create)
    ..m<$core.String, $core.String>(1, 'strings', entryClassName: 'Configuration.StringsEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS)
    ..pc<BarcodeFormat>(2, 'restrictFormat', $pb.PbFieldType.PE, protoName: 'restrictFormat', valueOf: BarcodeFormat.valueOf, enumValues: BarcodeFormat.values)
    ..a<$core.int>(3, 'useCamera', $pb.PbFieldType.O3, protoName: 'useCamera')
    ..aOM<AndroidConfiguration>(4, 'android', subBuilder: AndroidConfiguration.create)
    ..aOB(5, 'autoEnableFlash', protoName: 'autoEnableFlash')
    ..hasRequiredFields = false
  ;

  Configuration._() : super();
  factory Configuration() => create();
  factory Configuration.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Configuration.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Configuration clone() => Configuration()..mergeFromMessage(this);
  Configuration copyWith(void Function(Configuration) updates) => super.copyWith((message) => updates(message as Configuration));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Configuration create() => Configuration._();
  Configuration createEmptyInstance() => create();
  static $pb.PbList<Configuration> createRepeated() => $pb.PbList<Configuration>();
  @$core.pragma('dart2js:noInline')
  static Configuration getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Configuration>(create);
  static Configuration _defaultInstance;

  @$pb.TagNumber(1)
  $core.Map<$core.String, $core.String> get strings => $_getMap(0);

  @$pb.TagNumber(2)
  $core.List<BarcodeFormat> get restrictFormat => $_getList(1);

  @$pb.TagNumber(3)
  $core.int get useCamera => $_getIZ(2);
  @$pb.TagNumber(3)
  set useCamera($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasUseCamera() => $_has(2);
  @$pb.TagNumber(3)
  void clearUseCamera() => clearField(3);

  @$pb.TagNumber(4)
  AndroidConfiguration get android => $_getN(3);
  @$pb.TagNumber(4)
  set android(AndroidConfiguration v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasAndroid() => $_has(3);
  @$pb.TagNumber(4)
  void clearAndroid() => clearField(4);
  @$pb.TagNumber(4)
  AndroidConfiguration ensureAndroid() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.bool get autoEnableFlash => $_getBF(4);
  @$pb.TagNumber(5)
  set autoEnableFlash($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasAutoEnableFlash() => $_has(4);
  @$pb.TagNumber(5)
  void clearAutoEnableFlash() => clearField(5);
}

class ScanResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ScanResult', createEmptyInstance: create)
    ..e<ResultType>(1, 'type', $pb.PbFieldType.OE, defaultOrMaker: ResultType.Barcode, valueOf: ResultType.valueOf, enumValues: ResultType.values)
    ..aOS(2, 'rawContent', protoName: 'rawContent')
    ..e<BarcodeFormat>(3, 'format', $pb.PbFieldType.OE, defaultOrMaker: BarcodeFormat.unknown, valueOf: BarcodeFormat.valueOf, enumValues: BarcodeFormat.values)
    ..aOS(4, 'formatNote', protoName: 'formatNote')
    ..hasRequiredFields = false
  ;

  ScanResult._() : super();
  factory ScanResult() => create();
  factory ScanResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ScanResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ScanResult clone() => ScanResult()..mergeFromMessage(this);
  ScanResult copyWith(void Function(ScanResult) updates) => super.copyWith((message) => updates(message as ScanResult));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ScanResult create() => ScanResult._();
  ScanResult createEmptyInstance() => create();
  static $pb.PbList<ScanResult> createRepeated() => $pb.PbList<ScanResult>();
  @$core.pragma('dart2js:noInline')
  static ScanResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ScanResult>(create);
  static ScanResult _defaultInstance;

  @$pb.TagNumber(1)
  ResultType get type => $_getN(0);
  @$pb.TagNumber(1)
  set type(ResultType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get rawContent => $_getSZ(1);
  @$pb.TagNumber(2)
  set rawContent($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasRawContent() => $_has(1);
  @$pb.TagNumber(2)
  void clearRawContent() => clearField(2);

  @$pb.TagNumber(3)
  BarcodeFormat get format => $_getN(2);
  @$pb.TagNumber(3)
  set format(BarcodeFormat v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasFormat() => $_has(2);
  @$pb.TagNumber(3)
  void clearFormat() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get formatNote => $_getSZ(3);
  @$pb.TagNumber(4)
  set formatNote($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasFormatNote() => $_has(3);
  @$pb.TagNumber(4)
  void clearFormatNote() => clearField(4);
}

