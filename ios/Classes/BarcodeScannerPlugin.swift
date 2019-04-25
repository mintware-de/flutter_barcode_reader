import UIKit

class BarcodeScannerPlugin : NSObject,FlutterPlugin,BarcodeScannerViewControllerDelegate
{
    class func register(with registrar:FlutterPluginRegistrar)
    {
        let channel = FlutterMethodChannel(name:"com.apptreesoftware.barcode_scan",binaryMessenger:registrar.messenger())
        let instance = BarcodeScannerPlugin()
        instance.hostViewController = UIApplication.shared.delegate?.window??.rootViewController
        registrar.addMethodCallDelegate(instance,channel:channel)
    }
    
    func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult)
    {
        switch call.method
        {
            case "scan": self.showBarcodeView(result)
            default: result(FlutterMethodNotImplemented)
        }
    }
    
    var hostViewController : UIViewController?
    var callback : ((Any)->())?

    func showBarcodeView(_ result:@escaping FlutterResult)
    {
        callback = result
        let scannerViewController = BarcodeScannerViewController()
        let nav = BarcodeScannerNavigationController(rootViewController:scannerViewController)        
        scannerViewController.delegate = self
        hostViewController?.present(navigationController,animated:false,completion:nil)
    }

    func barcodeScannerViewController(_ controller: BarcodeScannerViewController?, didScanBarcodeWithResult result: String?)
    {        
        callback?(result)
    }

    func barcodeScannerViewController(_ controller: BarcodeScannerViewController?, didFailWithErrorCode errorCode: String?)
    {
        callback?(FlutterError(errorCode:errorCode,message:nil,details:nil))
    }
}
