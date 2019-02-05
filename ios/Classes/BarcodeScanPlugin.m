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
        [self showBarcodeViewWithTranslations: call.arguments[@"translations"]];
    } else {
        result(FlutterMethodNotImplemented);
    }
}

- (void)showBarcodeViewWithTranslations:(NSDictionary *)translations {
    BarcodeScannerViewController *scannerViewController = [[BarcodeScannerViewController alloc] init];
    UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:scannerViewController];
    scannerViewController.translations = translations;
    scannerViewController.delegate = self;
    [self.hostViewController presentViewController:navigationController animated:NO completion:nil];
}

- (void)barcodeScannerViewController:(BarcodeScannerViewController *)controller didScanBarcodeWithResult:(NSString *)result {
    if (self.result) {
        self.result(result);
    }
}

- (void)barcodeScannerViewController:(BarcodeScannerViewController *)controller didFailWithErrorCode:(NSString *)errorCode {
    if (self.result){
        self.result([FlutterError errorWithCode:errorCode
                                        message:nil
                                        details:nil]);
    }
}

@end
