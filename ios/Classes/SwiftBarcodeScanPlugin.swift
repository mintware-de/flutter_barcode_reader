import Flutter
import UIKit

public class SwiftBarcodeScanPlugin: NSObject, FlutterPlugin, BarcodeScannerViewControllerDelegate {
    
    private var result: FlutterResult?
    private var hostViewController: UIViewController?
    
    public static func register(with registrar: FlutterPluginRegistrar) {
        let channel = FlutterMethodChannel(name: "de.mintware.barcode_scan", binaryMessenger: registrar.messenger())
        let instance = SwiftBarcodeScanPlugin()
        instance.hostViewController = UIApplication.shared.delegate?.window??.rootViewController
        registrar.addMethodCallDelegate(instance, channel: channel)
    }
    
    public func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
        if ("scan" == call.method) {
            self.result = result
            showBarcodeView()
        } else {
            result(FlutterMethodNotImplemented)
        }
    }
    
    private func showBarcodeView() {
        let scannerViewController = BarcodeScannerViewController()
        
        let navigationController = UINavigationController(rootViewController: scannerViewController)
        
        if #available(iOS 13.0, *) {
            navigationController.modalPresentationStyle = .fullScreen
        }
        
        scannerViewController.delegate = self
        hostViewController?.present(navigationController, animated: false)
    }
    
    func didScanBarcodeWithResult(_ controller: BarcodeScannerViewController?, barcode: String) {
        result?(barcode)
    }
    
    func didFailWithErrorCode(_ controller: BarcodeScannerViewController?, errorCode: String) {
        result?(FlutterError(code: errorCode, message: nil, details: nil))
    }
}

