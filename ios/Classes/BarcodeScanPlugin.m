#import "BarcodeScanPlugin.h"
#import "BarcodeScannerViewController.h"

@implementation BarcodeScanPlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
    FlutterMethodChannel *channel = [FlutterMethodChannel methodChannelWithName:@"com.apptreesoftware.barcode_scan"
                                                                binaryMessenger:registrar.messenger];
    BarcodeScanPlugin *instance = [BarcodeScanPlugin new];
    instance.hostViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
    [registrar addMethodCallDelegate:instance channel:channel];
}

- (void)handleMethodCall:(FlutterMethodCall *)call result:(FlutterResult)result {
    if ([@"scan" isEqualToString:call.method]) {
        self.result = result;
        [self showBarcodeView];
    } else {
        result(FlutterMethodNotImplemented);
    }
}

- (void)showBarcodeView {
    BarcodeScannerViewController *scannerViewController = [[BarcodeScannerViewController alloc] init];
    UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:scannerViewController];
    scannerViewController.delegate = self;
    [self.hostViewController presentViewController:navigationController animated:NO completion:nil];
}

- (void)barcodeScannerViewController:(BarcodeScannerViewController *)controller didScanBarcodeWithResult:(NSString *)result {
    if (self.result && [result isEqualToString: @"PERMISSION_NOT_GRANTED"]){
        self.result([FlutterError errorWithCode:@"PERMISSION_NOT_GRANTED"
                                   message:nil
                                   details:nil]);
    } else if (self.result) {
        self.result(result);
    }
}

@end
