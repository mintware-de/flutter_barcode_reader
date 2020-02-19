#import "ScannerOverlay.h"

@interface ScannerOverlay()
  @property(nonatomic, retain) UIView *line;
@end

@implementation ScannerOverlay
  
  - (instancetype)initWithFrame:(CGRect)frame
  {
    self = [super initWithFrame:frame];
    if (self) {
      _line = [[UIView alloc] init];
      _line.backgroundColor = UIColor.redColor;
      _line.translatesAutoresizingMaskIntoConstraints = NO;
      [self addSubview:_line];
    }
    return self;
  }

- (void)drawRect:(CGRect)rect {
  CGContextRef context = UIGraphicsGetCurrentContext();
  
  UIColor * overlayColor = [UIColor colorWithRed:0.0 green:0.0 blue:0.0 alpha:0.55];
  UIColor *scanLineColor = UIColor.redColor;
  
  CGContextSetFillColorWithColor(context, overlayColor.CGColor);
  CGContextFillRect(context, self.bounds);
  
  // make a hole for the scanner
  CGRect holeRect = [self scanRect];
  CGRect holeRectIntersection = CGRectIntersection( holeRect, rect );
  [[UIColor clearColor] setFill];
  UIRectFill(holeRectIntersection);
  
  // draw a horizontal line over the middle
  CGRect lineRect = [self scanLineRect];
  _line.frame = lineRect;
  
  // drw the green corners
  CGFloat cornerSize = 30;
  UIBezierPath *path = [UIBezierPath bezierPath];
  //top left corner
  [path moveToPoint:CGPointMake(holeRect.origin.x, holeRect.origin.y + cornerSize)];
  [path addLineToPoint:CGPointMake(holeRect.origin.x, holeRect.origin.y)];
  [path addLineToPoint:CGPointMake(holeRect.origin.x + cornerSize, holeRect.origin.y)];
  
  //top right corner
  CGFloat rightHoleX = holeRect.origin.x + holeRect.size.width;
  [path moveToPoint:CGPointMake(rightHoleX - cornerSize, holeRect.origin.y)];
  [path addLineToPoint:CGPointMake(rightHoleX, holeRect.origin.y)];
  [path addLineToPoint:CGPointMake(rightHoleX, holeRect.origin.y + cornerSize)];
  
  // bottom right corner
  CGFloat bottomHoleY = holeRect.origin.y + holeRect.size.height;
  [path moveToPoint:CGPointMake(rightHoleX, bottomHoleY - cornerSize)];
  [path addLineToPoint:CGPointMake(rightHoleX, bottomHoleY)];
  [path addLineToPoint:CGPointMake(rightHoleX - cornerSize, bottomHoleY)];
  
  // bottom left corner
  [path moveToPoint:CGPointMake(holeRect.origin.x + cornerSize, bottomHoleY)];
  [path addLineToPoint:CGPointMake(holeRect.origin.x, bottomHoleY)];
  [path addLineToPoint:CGPointMake(holeRect.origin.x, bottomHoleY - cornerSize)];
  
  path.lineWidth = 2;
  [[UIColor greenColor] setStroke];
  [path stroke];
  
}
  
  - (void)startAnimating {
    CABasicAnimation *flash = [CABasicAnimation animationWithKeyPath:@"opacity"];
    flash.fromValue = [NSNumber numberWithFloat:0.0];
    flash.toValue = [NSNumber numberWithFloat:1.0];
    flash.duration = 0.25;
    flash.autoreverses = YES;
    flash.repeatCount = HUGE_VALF;
    [_line.layer addAnimation:flash forKey:@"flashAnimation"];
  }
  
  - (void)stopAnimating {
    [self.layer removeAnimationForKey:@"flashAnimation"];
  }
  
  - (CGRect)scanRect {
      CGRect rect = self.frame;

      CGFloat frameWidth = rect.size.width;
      CGFloat frameHeight = rect.size.height;

      BOOL isLandscape = frameWidth > frameHeight;
      CGFloat widthOnPortrait = isLandscape ? frameHeight : frameWidth;
      CGFloat scanRectWidth = widthOnPortrait * 0.8f;
      CGFloat aspectRatio = 3.0/4.0;
      CGFloat scanRectHeight = scanRectWidth * aspectRatio;

      if(isLandscape) {
          CGFloat navbarHeight = 32;
          frameHeight += navbarHeight;
      }

      CGFloat scanRectOriginX = (frameWidth - scanRectWidth) / 2;
      CGFloat scanRectOriginY = (frameHeight - scanRectHeight) / 2;
      return CGRectMake(scanRectOriginX, scanRectOriginY, scanRectWidth, scanRectHeight);
  }
  
  - (CGRect)scanLineRect {
    CGRect scanRect = [self scanRect];
    CGFloat positionY = scanRect.origin.y + (scanRect.size.height / 2);
    return CGRectMake(scanRect.origin.x, positionY, scanRect.size.width, 1);
  }

@end
