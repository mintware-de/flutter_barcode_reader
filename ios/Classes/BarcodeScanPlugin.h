#import <Flutter/Flutter.h>
#import "BarcodeScannerViewControllerDelegate.h"

#define UIColorFromRGB(rgbValue) \
[UIColor colorWithRed:((float)((rgbValue & 0xFF0000) >> 16))/255.0 \
  green:((float)((rgbValue & 0x00FF00) >>  8))/255.0 \
  blue:((float)((rgbValue & 0x0000FF) >>  0))/255.0 \
  alpha:1.0]

@interface BarcodeScanPlugin : NSObject<FlutterPlugin, BarcodeScannerViewControllerDelegate>

@property(nonatomic, copy) FlutterResult result;
@property (nonatomic, assign) UIViewController *hostViewController;
@end
