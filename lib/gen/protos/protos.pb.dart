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

class Configuration extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Configuration', createEmptyInstance: create)
    ..aOS(1, 'cancelText', protoName: 'cancelText')
    ..aOS(2, 'flashOnText', protoName: 'flashOnText')
    ..aOS(3, 'flashOffText', protoName: 'flashOffText')
    ..pc<BarcodeFormat>(4, 'restrictFormat', $pb.PbFieldType.PE, protoName: 'restrictFormat', valueOf: BarcodeFormat.valueOf, enumValues: BarcodeFormat.values)
    ..a<$core.int>(5, 'useCamera', $pb.PbFieldType.O3, protoName: 'useCamera')
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
  $core.String get cancelText => $_getSZ(0);
  @$pb.TagNumber(1)
  set cancelText($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCancelText() => $_has(0);
  @$pb.TagNumber(1)
  void clearCancelText() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get flashOnText => $_getSZ(1);
  @$pb.TagNumber(2)
  set flashOnText($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasFlashOnText() => $_has(1);
  @$pb.TagNumber(2)
  void clearFlashOnText() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get flashOffText => $_getSZ(2);
  @$pb.TagNumber(3)
  set flashOffText($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasFlashOffText() => $_has(2);
  @$pb.TagNumber(3)
  void clearFlashOffText() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<BarcodeFormat> get restrictFormat => $_getList(3);

  @$pb.TagNumber(5)
  $core.int get useCamera => $_getIZ(4);
  @$pb.TagNumber(5)
  set useCamera($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasUseCamera() => $_has(4);
  @$pb.TagNumber(5)
  void clearUseCamera() => clearField(5);
}

