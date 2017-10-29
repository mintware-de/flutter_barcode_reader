#import "BarcodeScanPlugin.h"
#import <barcode_scan/barcode_scan-Swift.h>

@implementation BarcodeScanPlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
  [SwiftBarcodeScanPlugin registerWithRegistrar:registrar];
}
@end
