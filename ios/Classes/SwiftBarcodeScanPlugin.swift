import Flutter
import UIKit
import MTBBarcodeScanner

public class SwiftBarcodeScanPlugin: NSObject, FlutterPlugin, BarcodeScannerViewControllerDelegate {
    
    private var result : FlutterResult?
    private var hostViewController : UIViewController?
    
    public static func register(with registrar: FlutterPluginRegistrar) {
        let channel = FlutterMethodChannel(name: "com.apptreesoftware.barcode_scan", binaryMessenger: registrar.messenger());
        let instance = SwiftBarcodeScanPlugin();
        instance.hostViewController = UIApplication.shared.delegate?.window!?.rootViewController
        registrar.addMethodCallDelegate(instance, channel: channel);
    }
    
    public func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
        switch call.method {
        case "scan":
            self.result = result;
            showBarcodeView();
            break;
        default:
         result(FlutterMethodNotImplemented);
        }
    }
    
    private func showBarcodeView() {
        let viewController = BarcodeScannerViewController()
        let navController = UINavigationController(rootViewController: viewController)
        viewController.delegate = self
        self.hostViewController?.present(navController, animated: true, completion: nil);
    }
    
    func barcodeScannerViewController(_ controller : BarcodeScannerViewController, didScanBarcodeWithResult result: String) {
        if let callback = self.result {
            callback(result)
        }
    }
}
