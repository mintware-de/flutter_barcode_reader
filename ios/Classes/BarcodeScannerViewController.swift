import MTBBarcodeScanner
import UIKit

protocol BarcodeScannerViewControllerDelegate : NSObjectProtocol 
{
    func barcodeScannerViewController(_ controller: BarcodeScannerViewController?, didScanBarcodeWithResult result: String?)
    func barcodeScannerViewController(_ controller: BarcodeScannerViewController?, didFailWithErrorCode errorCode: String)
}

class BarcodeScannerNavigationController : UINavigationController
{
    func prefersStatusBarHidden() -> Bool {
        return true
    }
    
    func preferredStatusBarStyle() -> UIStatusBarStyle
    {
        return .lightContent
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
    
    func prefersStatusBarHidden() -> Bool
    {
        return true
    }
    
    func preferredStatusBarStyle() -> UIStatusBarStyle
    {
        return .lightContent
    }

    override func viewDidLoad()
    {
        super.viewDidLoad()
        let pv = UIView(frame:self.view.bounds)
        pv.autoresizingMask = [.flexibleWidth,.flexibleHeight]
        view.addSubview(pv)
        previewView = pv
        
        let sr = ScannerOverlay(frame:self.view.bounds)
        sr.autoresizingMask = [.flexibleWidth,.flexibleHeight]
        sr.backgroundColor = .clear
        view.addSubview(sr)
        sr.startAnimating()
        scanRect = sr
        
        scanner = MTBBarcodeScanner(previewView:pv)
        updateFlashButton()
        
        let close = UIBarButtonItem(barButtonSystemItem:.cancel, target:self, action:#selector(cancel))
        let flash = UIBarButtonItem(title:"FLASH ON", style:.plain, target:self, action:#selector(toggle))
        let flex = UIBarButtonItem(barButtonSystemItem:.flexibleSpace, target:nil, action:nil)
        toolbarItems = [close,flex,flash]
        closeButton = close
        flashButton = flash
    }
    
    override func viewWillAppear(_ animated:Bool)
    {
        super.viewWillAppear(animated)
        
        navigationController?.isToolbarHidden = false
        navigationController?.setNavigationBarHidden(true, animated:false)
        
        navigationController?.toolbar.tintColor = .white
        navigationController?.toolbar.isTranslucent = true
        navigationController?.toolbar.setBackgroundImage(UIImage(),forToolbarPosition:.any,barMetrics:.default)
        navigationController?.toolbar.backgroundColor = .clear
    }
    
    override func viewDidAppear(_ animated:Bool)
    {
        super.viewDidAppear(animated)
        
        if let scanner = scanner
        {
            if scanner.isScanning()
            {
                scanner.stopScanning()
            }
        }
        
        MTBBarcodeScanner.requestCameraPermission()
        { success in
            
            if success {
                self.startScan()
            } else {
                self.delegate?.barcodeScannerViewController(self, didFailWithErrorCode:"PERMISSION_NOT_GRANTED")
                self.dismiss(animated: false, completion:nil)
            }
            
        }
    }
    
    override func viewWillDisappear(_ animated:Bool)
    {
        self.scanner?.stopScanning()
        super.viewWillDisappear(animated)
        if self.isFlashOn()
        {
            self.toggleFlash(false)
        }
    }
    
    override func viewWillTransition(to size:CGSize, with coordinator:UIViewControllerTransitionCoordinator)
    {
        coordinator.animate(alongsideTransition: { (context:UIViewControllerTransitionCoordinatorContext) in
            self.view.setNeedsLayout()
            self.view.layoutSubviews()
            let origin:CGPoint = self.view.frame.origin
            self.scanner?.previewLayer.frame = CGRect(x:origin.x,y:origin.y,width: size.width,height: size.height)
            
            guard let scanner = self.scanner else { return }
            if scanner.isScanning()
            {
                self.wasScanning = true
                scanner.stopScanning()
            }
        }, completion:{ (context:UIViewControllerTransitionCoordinatorContext!)
            in
            if self.wasScanning
            {
                self.startScan()
            }
        })
        
        super.viewWillTransition(to:size, with:coordinator)
    }
    
    func startScan()
    {
        guard let scanner = scanner else { return }
        
        do
        {
            try scanner.startScanning()
            { codes in
                
                guard let code = codes?.first else { return }
                
                scanner.stopScanning()
                
                self.delegate?.barcodeScannerViewController(self,didScanBarcodeWithResult:code.stringValue)
                self.dismiss(animated:false, completion:nil)
            }
        }
        catch
        {
            
        }
    }
    
    @objc
    func cancel()
    {
        self.dismiss(animated:false, completion:nil)
    }
    
    func updateFlashButton()
    {
        if !self.hasTorch()
        {
            return
        }
        if self.isFlashOn() {
            self.flashButton?.title = "Flash Off"
        } else {
            self.flashButton?.title = "Flash On"
        }
    }
    
    @objc
    func toggle()
    {
        self.toggleFlash(!self.isFlashOn())
        self.updateFlashButton()
    }
    
    func isFlashOn() -> Bool
    {
        guard let device : AVCaptureDevice = AVCaptureDevice.default(for: AVMediaType.video) else { return false }
        return device.torchMode == .on
    }
    
    func hasTorch() -> Bool
    {
        guard let device : AVCaptureDevice = AVCaptureDevice.default(for: AVMediaType.video) else { return false }
        return device.hasTorch
    }
    
    func toggleFlash(_ on:Bool)
    {
        guard let device : AVCaptureDevice = AVCaptureDevice.default(for: AVMediaType.video) else { return }
                
        if device.hasFlash && device.hasTorch
        {
            do
            {
                try device.lockForConfiguration()
                if on
                {
                    device.flashMode = .on
                    device.torchMode = .on
                }
                else
                {
                    device.flashMode = .off
                    device.torchMode = .off
                }
                
                device.unlockForConfiguration()
            }
            catch
            {
                
            }
        }
    }
}
