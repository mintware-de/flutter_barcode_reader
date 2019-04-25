import MTBBarcodeScanner
import UIKit

protocol BarcodeScannerViewControllerDelegate : NSObjectProtocol 
{
    func barcodeScannerViewController(_ controller: BarcodeScannerViewController?, didScanBarcodeWithResult result: String?)
    func barcodeScannerViewController(_ controller: BarcodeScannerViewController?, didFailWithErrorCode errorCode: String?)
}

class BarcodeScannerNavigationController : UINavigationController
{
    func prefersStatusBarHidden() -> Bool {
        return true
    }
    
    func preferredStatusBarStyle() -> UIStatusBarStyle {
        return UIStatusBarStyleLightContent
    }
}

class BarcodeScannerViewController: UIViewController 
{
    var previewView : UIView?
    var scanRect : ScannerOverlay?
    var scanner : MTBBarcodeScanner?
    weak var delegate : BarcodeScannerViewControllerDelegate?
    
    private var closeButton : UIBarButtonItem?
    private var flashButton : UIBarButtonItem?
    
    private var wasScanning : Bool = false
    
    func prefersStatusBarHidden() -> Bool {
        return true
    }
    
    func preferredStatusBarStyle() -> UIStatusBarStyle {
        return UIStatusBarStyleLightContent
    }

    override func viewDidLoad()
    {
        super.viewDidLoad()
        self.previewView = UIView(frame:self.view.bounds)
        self.previewView.autoresizingMask = [.flexibleWidth,.flexibleHeight]
        self.view.addSubview(_previewView)
        
        self.scanRect = ScannerOverlay(frame:self.view.bounds)
        self.scanRect.autoresizingMask = [.flexibleWidth,.flexibleHeight]
        self.scanRect.backgroundColor = .clearColor
        self.view.addSubview(_scanRect)
        _scanRect.startAnimating()
        self.scanner = MTBBarcodeScanner(previewView:_previewView)
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem:UIBarButtonSystemItemCancel, target:self, action:Selector("cancel"))
        self.updateFlashButton()
        
        self.closeButton = UIBarButtonItem(barButtonSystemItem:UIBarButtonSystemItemCancel, target:self, action:Selector("cancel"))
        self.flashButton = UIBarButtonItem(title:"FLASH ON", style:UIBarButtonItemStylePlain, target:self, action:Selector("toggle"))
        self.toolbarItems = [self.closeButton,UIBarButtonItem(barButtonSystemItem:UIBarButtonSystemItemFlexibleSpace, target:nil, action:nil),self.flashButton]
    }
    
    override func viewWillAppear(_ animated:Bool)
    {
        super.viewWillAppear(animated)
        
        self.navigationController.toolbarHidden = false
        self.navigationController.setNavigationBarHidden(true, animated:false)
        
        self.navigationController.toolbar.tintColor = UIColor.whiteColor()
        self.navigationController.toolbar.translucent = true
        self.navigationController.toolbar.setBackgroundImage(UIImage(),
                                                             forToolbarPosition:UIToolbarPositionAny,
                                                             barMetrics:UIBarMetricsDefault)
        self.navigationController.toolbar.backgroundColor = UIColor.clearColor()
    }
    
    override func viewDidAppear(_ animated:Bool)
    {
        super.viewDidAppear(animated)
        if self.scanner.isScanning {
            self.scanner.stopScanning()
        }
        MTBBarcodeScanner.requestCameraPermissionWithSuccess({ (success:Bool) in
            if success {
                self.startScan()
            } else {
                self.delegate.barcodeScannerViewController(self, didFailWithErrorCode:"PERMISSION_NOT_GRANTED")
                self.dismissViewControllerAnimated(false, completion:nil)
            }
        })
    }
    
    override func viewWillDisappear(_ animated:Bool)
    {
        self.scanner.stopScanning()
        super.viewWillDisappear(animated)
        if self.isFlashOn() {
            self.toggleFlash(false)
        }
    }
    
    override func viewWillTransitionToSize(size:CGSize, withTransitionCoordinator coordinator:UIViewControllerTransitionCoordinator)
    {
        coordinator.animateAlongsideTransition({ (context:UIViewControllerTransitionCoordinatorContext)
            in
            self.view.setNeedsLayout()
            self.view.layoutSubviews()
            let origin:CGPoint = self.view.frame.origin
            self.scanner.previewLayer.frame = CGRectMake(origin.x, origin.y, size.width, size.height)
            
            if self.scanner.isScanning
            {
                wasScanning = true
                self.scanner.stopScanning()
            }
        }, completion:{ (context:UIViewControllerTransitionCoordinatorContext!)
            in
            if wasScanning
            {self.startScan()}
        })
        
        super.viewWillTransitionToSize(size, withTransitionCoordinator:coordinator)
    }
    
    func startScan()
    {
        var error:NSError!
        self.scanner.startScanningWithResultBlock({ (codes:[AnyObject]!) in
            self.scanner.stopScanning()
            let code:AVMetadataMachineReadableCodeObject! = codes.firstObject
            if (code != nil) {
                self.delegate.barcodeScannerViewController(self, didScanBarcodeWithResult:code.stringValue)
                self.dismissViewControllerAnimated(false, completion:nil)
            }
        }, error:&error)
    }
    
    func cancel()
    {
        self.dismissViewControllerAnimated(true, completion:nil)
    }
    
    func updateFlashButton()
    {
        if !self.hasTorch()
        {
            return
        }
        if self.isFlashOn() {
            self.flashButton.title = "FLASH OFF"
        } else {
            self.flashButton.title = "FLASH ON"
        }
    }
    
    func toggle()
    {
        self.toggleFlash(!self.isFlashOn())
        self.updateFlashButton()
    }
    
    func isFlashOn() -> Bool
    {
        let device:AVCaptureDevice! = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
        if (device != nil) {
            return device.torchMode == AVCaptureFlashModeOn || device.torchMode == AVCaptureTorchModeOn
        }
        return false
    }
    
    func hasTorch() -> Bool
    {
        let device:AVCaptureDevice! = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
        if (device != nil) {
            return device.hasTorch
        }
        return false
    }
    
    func toggleFlash(on:Bool)
    {
        let device:AVCaptureDevice! = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
        if (device == nil) {return}
        
        var err:NSError!
        if device.hasFlash && device.hasTorch {
            device.lockForConfiguration(&err)
            if err != nil {return}
            if on {
                device.flashMode = AVCaptureFlashModeOn
                device.torchMode = AVCaptureTorchModeOn
            } else {
                device.flashMode = AVCaptureFlashModeOff
                device.torchMode = AVCaptureTorchModeOff
            }
            device.unlockForConfiguration()
        }
    }
}
