//
//  BarcodeScannerViewControllerDelegate.swift
//  barcode_scan
//
//  Created by Julian Finkler on 20.02.20.
//
import Foundation

protocol BarcodeScannerViewControllerDelegate {
    func didScanBarcodeWithResult(_ controller: BarcodeScannerViewController?,
                                  scanResult: ScanResult
    )
    
    func didFailWithErrorCode(_ controller: BarcodeScannerViewController?,
                              errorCode: String
    )
}
