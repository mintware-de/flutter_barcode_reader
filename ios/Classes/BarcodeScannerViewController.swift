//
//  BarcodeScannerViewController.swift
//  AppTreeRevolution
//
//  Created by Matthew Smith on 2/18/15.
//  Copyright (c) 2015 AppTree Software. All rights reserved.
//

import UIKit
import MTBBarcodeScanner

protocol BarcodeScannerViewControllerDelegate : class {
    func barcodeScannerViewController(_ controller : BarcodeScannerViewController, didScanBarcodeWithResult result: String)
}

struct BarcodeScanContext {
    var attributeIndex : Int?
}

protocol TorchSupport {
    var flashOn: Bool { get }
    var hasTorch: Bool { get }
    func toggleFlash(to flashOn: Bool)
}

extension TorchSupport {
    var flashOn: Bool {
        if let device = AVCaptureDevice.defaultDevice(withMediaType: AVMediaTypeVideo) {
            return device.torchMode == AVCaptureTorchMode.on && device.flashMode == AVCaptureFlashMode.on
        }
        return false
    }
    
    var hasTorch: Bool {
        let device = AVCaptureDevice.defaultDevice(withMediaType: AVMediaTypeVideo)
        return device?.hasTorch ?? false
    }
    
    func toggleFlash(to flashOn: Bool) {
        let device : AVCaptureDevice = AVCaptureDevice.defaultDevice(withMediaType: AVMediaTypeVideo)
        do {
            if device.hasFlash && device.hasTorch {
                try device.lockForConfiguration()
                if flashOn {
                    device.flashMode = AVCaptureFlashMode.on
                    device.torchMode = AVCaptureTorchMode.on
                } else {
                    device.flashMode = AVCaptureFlashMode.off
                    device.torchMode = AVCaptureTorchMode.off
                }
                device.unlockForConfiguration()
            }
        } catch {
            print("Could not lock the camera configuration")
        }
    }
}

class BarcodeScannerOverlayView : UIView, TorchSupport {
    
    var turnLightOnLabel : UILabel!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        _init()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        _init()
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    
    func _init() {
        turnLightOnLabel = UILabel()
        turnLightOnLabel.translatesAutoresizingMaskIntoConstraints = false
        turnLightOnLabel.textColor = UIColor.white
        turnLightOnLabel.layer.cornerRadius = 8.0
        turnLightOnLabel.clipsToBounds = true
        turnLightOnLabel.alpha = 0.8
        turnLightOnLabel.text = "Tap to toggle flash"
        self.addSubview(turnLightOnLabel)
        self.addConstraints(NSLayoutConstraint
            .constraints(withVisualFormat: "V:|[turnLightOnLabel(20)]-20-|",
                         options: NSLayoutFormatOptions.alignAllBottom,
                         metrics: nil,
                         views: ["turnLightOnLabel" : turnLightOnLabel]))
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        UIView.animate(withDuration: 0.35, animations: {
            self.turnLightOnLabel.alpha = 0.0
        }) 
        self.toggleFlash(to: true)
    }
    
    override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
        UIView.animate(withDuration: 0.35, animations: {
            self.turnLightOnLabel.alpha = 0.8
        }) 
        self.toggleFlash(to: false)
    }
}

class BarcodeScannerViewController: UIViewController, TorchSupport {

    var overlayView: BarcodeScannerOverlayView!
    var previewView: UIView!
    
    var scanner : MTBBarcodeScanner!
    var context : BarcodeScanContext = BarcodeScanContext()
    
    weak var delegate : BarcodeScannerViewControllerDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.previewView = UIView(frame: self.view.bounds)
        self.previewView.translatesAutoresizingMaskIntoConstraints = false
        self.overlayView = BarcodeScannerOverlayView(frame: self.view.bounds)
        self.overlayView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(previewView)
        self.view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:[previewView]", options: NSLayoutFormatOptions.alignAllBottom, metrics: nil, views: ["previewView" : previewView]))
        self.view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:[previewView]", options: NSLayoutFormatOptions.alignAllBottom, metrics: nil, views: ["previewView" : previewView]))
        
        
//        self.view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:[overlayView]", options: NSLayoutFormatOptions.alignAllBottom, metrics: nil, views: ["overlayView" : overlayView]))
//        self.view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:[overlayView]", options: NSLayoutFormatOptions.alignAllBottom, metrics: nil, views: ["overlayView" : overlayView]))
        scanner = MTBBarcodeScanner(previewView: previewView)
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .cancel, target: self, action: #selector(BarcodeScannerViewController.cancel))
        updateFlashButton()
    }
    
    private func updateFlashButton() {
        if !self.hasTorch {
            return
        }
        if self.flashOn {
         self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Flash Off", style: .plain, target: self, action: #selector(BarcodeScannerViewController.toggle))
        } else {
            self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Flash On", style: .plain, target: self, action: #selector(BarcodeScannerViewController.toggle))
        }
    }
    
    func toggle() {
        self.toggleFlash(to: !flashOn)
        self.updateFlashButton()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        if self.scanner.isScanning() {
            self.scanner.stopScanning()
        }
        MTBBarcodeScanner.requestCameraPermission { (success : Bool) -> Void in
            if success {
                self.startScan()
            } else {
                self.showNoCameraAccessAlert()
            }
        }
    }
    
    func cancel() {
        self.dismiss(animated: true, completion: nil)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.scanner.stopScanning()
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        super.viewDidDisappear(animated)
        if self.flashOn {
            self.toggleFlash(to: false)
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    fileprivate func startScan() {
        do {
            try self.scanner.startScanning(resultBlock: {[weak self] results in
                if let code = results?.first {
                    self?.scanner.stopScanning()
                    if let strongSelf = self {
                        self?.delegate?.barcodeScannerViewController(strongSelf, didScanBarcodeWithResult: code.stringValue)
                        self?.dismiss(animated: true, completion: nil)
                    }
                }
            })
        } catch {
            
        }
    }

    fileprivate func showNoCameraAccessAlert() {
        let alertController = UIAlertController(title: "Camera access denied", message: "Camera access has been disabled for this application. To turn camera access back on, please go to the iOS settings application.", preferredStyle: .alert);
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { (action) -> Void in
            _ = self.navigationController?.popViewController(animated: true)
        }))
        self.present(alertController, animated: true, completion: nil)
    }
}
