///
//  Generated code. Do not modify.
//  source: protos/protos.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const BarcodeFormat$json = const {
  '1': 'BarcodeFormat',
  '2': const [
    const {'1': 'unknown', '2': 0},
    const {'1': 'aztec', '2': 1},
    const {'1': 'code39', '2': 2},
    const {'1': 'code93', '2': 3},
    const {'1': 'ean8', '2': 4},
    const {'1': 'ean13', '2': 5},
    const {'1': 'code128', '2': 6},
    const {'1': 'dataMatrix', '2': 7},
    const {'1': 'qr', '2': 8},
    const {'1': 'interleaved2of5', '2': 9},
    const {'1': 'upce', '2': 10},
    const {'1': 'pdf417', '2': 11},
  ],
};

const ResultType$json = const {
  '1': 'ResultType',
  '2': const [
    const {'1': 'Barcode', '2': 0},
    const {'1': 'Cancelled', '2': 1},
    const {'1': 'Error', '2': 2},
  ],
};

const AndroidConfiguration$json = const {
  '1': 'AndroidConfiguration',
  '2': const [
    const {'1': 'aspectTolerance', '3': 1, '4': 1, '5': 1, '10': 'aspectTolerance'},
    const {'1': 'useAutoFocus', '3': 2, '4': 1, '5': 8, '10': 'useAutoFocus'},
  ],
};

const Configuration$json = const {
  '1': 'Configuration',
  '2': const [
    const {'1': 'strings', '3': 1, '4': 3, '5': 11, '6': '.Configuration.StringsEntry', '10': 'strings'},
    const {'1': 'restrictFormat', '3': 2, '4': 3, '5': 14, '6': '.BarcodeFormat', '10': 'restrictFormat'},
    const {'1': 'useCamera', '3': 3, '4': 1, '5': 5, '10': 'useCamera'},
    const {'1': 'android', '3': 4, '4': 1, '5': 11, '6': '.AndroidConfiguration', '10': 'android'},
    const {'1': 'autoEnableFlash', '3': 5, '4': 1, '5': 8, '10': 'autoEnableFlash'},
  ],
  '3': const [Configuration_StringsEntry$json],
};

const Configuration_StringsEntry$json = const {
  '1': 'StringsEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const ScanResult$json = const {
  '1': 'ScanResult',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.ResultType', '10': 'type'},
    const {'1': 'rawContent', '3': 2, '4': 1, '5': 9, '10': 'rawContent'},
    const {'1': 'format', '3': 3, '4': 1, '5': 14, '6': '.BarcodeFormat', '10': 'format'},
    const {'1': 'formatNote', '3': 4, '4': 1, '5': 9, '10': 'formatNote'},
  ],
};

