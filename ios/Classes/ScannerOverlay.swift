//
//  ScannerOverlay.swift
//  barcode_scan
//
//  Created by Julian Finkler on 20.02.20.
//

import Foundation

class ScannerOverlay: UIView {
    private let line: UIView = UIView()
    
    private var scanLineRect: CGRect {
        let scanRect = calculateScanRect()
        let positionY = scanRect.origin.y + (scanRect.size.height / 2)
        
        return CGRect(x: scanRect.origin.x,
                      y: positionY,
                      width: scanRect.size.width,
                      height: 1
        )
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        line.backgroundColor = UIColor.red
        line.translatesAutoresizingMaskIntoConstraints = false
        
        addSubview(line)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    override func draw(_ rect: CGRect) {
        let context = UIGraphicsGetCurrentContext()
        
        let overlayColor = UIColor(red: 0.0,
                                   green: 0.0,
                                   blue: 0.0,
                                   alpha: 0.55
        )
        
        context?.setFillColor(overlayColor.cgColor)
        context?.fill(bounds)
        
        // make a hole for the scanner
        let holeRect = calculateScanRect()
        let holeRectIntersection = holeRect.intersection(rect)
        UIColor.clear.setFill()
        UIRectFill(holeRectIntersection)
        
        // draw a horizontal line over the middle
        let lineRect = scanLineRect
        line.frame = lineRect
        
        // draw the green corners
        let cornerSize: CGFloat = 30
        let path = UIBezierPath()
        
        //top left corner
        path.move(to: CGPoint(x: holeRect.origin.x, y: holeRect.origin.y + cornerSize))
        path.addLine(to: CGPoint(x: holeRect.origin.x, y: holeRect.origin.y))
        path.addLine(to: CGPoint(x: holeRect.origin.x + cornerSize, y: holeRect.origin.y))
        
        //top right corner
        let rightHoleX = holeRect.origin.x + holeRect.size.width
        path.move(to: CGPoint(x: rightHoleX - cornerSize, y: holeRect.origin.y))
        path.addLine(to: CGPoint(x: rightHoleX, y: holeRect.origin.y))
        path.addLine(to: CGPoint(x: rightHoleX, y: holeRect.origin.y + cornerSize))
        
        // bottom right corner
        let bottomHoleY = holeRect.origin.y + holeRect.size.height
        path.move(to: CGPoint(x: rightHoleX, y: bottomHoleY - cornerSize))
        path.addLine(to: CGPoint(x: rightHoleX, y: bottomHoleY))
        path.addLine(to: CGPoint(x: rightHoleX - cornerSize, y: bottomHoleY))
        
        // bottom left corner
        path.move(to: CGPoint(x: holeRect.origin.x + cornerSize, y: bottomHoleY))
        path.addLine(to: CGPoint(x: holeRect.origin.x, y: bottomHoleY))
        path.addLine(to: CGPoint(x: holeRect.origin.x, y: bottomHoleY - cornerSize))
        
        path.lineWidth = 2
        UIColor.green.setStroke()
        path.stroke()
    }
    
    public func startAnimating() {
        layer.removeAnimation(forKey: "flashAnimation")
        let flash = CABasicAnimation(keyPath: "opacity")
        flash.fromValue = NSNumber(value: 0.0)
        flash.toValue = NSNumber(value: 1.0)
        flash.duration = 0.25
        flash.autoreverses = true
        flash.repeatCount = HUGE
        line.layer.add(flash, forKey: "flashAnimation")
    }
    
    public func stopAnimating() {
        layer.removeAnimation(forKey: "flashAnimation")
    }
    
    private func calculateScanRect() -> CGRect {
        let rect = frame
        
        let frameWidth = rect.size.width
        var frameHeight = rect.size.height
        
        let isLandscape = frameWidth > frameHeight
        let widthOnPortrait = isLandscape ? frameHeight : frameWidth
        let scanRectWidth = widthOnPortrait * 0.8
        let aspectRatio: CGFloat = 3.0 / 4.0
        let scanRectHeight = scanRectWidth * aspectRatio
        
        if isLandscape {
            let navbarHeight: CGFloat = 32
            frameHeight += navbarHeight
        }
        
        let scanRectOriginX = (frameWidth - scanRectWidth) / 2
        let scanRectOriginY = (frameHeight - scanRectHeight) / 2
        return CGRect(x: scanRectOriginX,
                      y: scanRectOriginY,
                      width: scanRectWidth,
                      height: scanRectHeight
        )
    }
}
