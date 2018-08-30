//
// Created by Matthew Smith on 11/7/17.
//

#import <Foundation/Foundation.h>
#import <MTBBarcodeScanner/MTBBarcodeScanner.h>

#import "BarcodeScannerViewControllerDelegate.h"
#import "ScannerOverlay.h"


@interface BarcodeScannerViewController : UIViewController
@property(nonatomic, retain) UIView *previewView;
  @property(nonatomic, retain) ScannerOverlay *scanRect;
@property(nonatomic, retain) MTBBarcodeScanner *scanner;
@property(nonatomic, weak) id<BarcodeScannerViewControllerDelegate> delegate;

  
  -(id) initWithOptions:(NSDictionary *) options;
@end
