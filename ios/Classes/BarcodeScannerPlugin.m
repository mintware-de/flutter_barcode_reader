#import "BarcodeScannerPlugin.h"
#import <barcode_scan/barcode_scan-Swift.h>

@implementation BarcodeScannerPlugin

+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar 
{
  [SwiftBarcodeScannerPlugin registerWithRegistrar:registrar];
}

@end
