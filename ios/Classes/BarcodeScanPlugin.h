#import <Flutter/Flutter.h>
#import "BarcodeScannerViewControllerDelegate.h"


@interface BarcodeScanPlugin : NSObject<FlutterPlugin, BarcodeScannerViewControllerDelegate>

@property(nonatomic, retain) FlutterResult result;
@property (nonatomic, assign) UIViewController *hostViewController;
@end
