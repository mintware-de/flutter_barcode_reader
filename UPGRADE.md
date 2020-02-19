# Upgrade from 1.0.0 to 2.0.0

The simples way for upgrading is by replacing:
- `com.apptreesoftware.barcodescan`
- `com.yourcompany.barcodescan`
- `com.apptreesoftware.barcode_scan`

With: `de.mintware.barcode_scan`

Detailed changes:
Android:
Kotlin Package: `com.apptreesoftware.barcodescan` -> `de.mintware.barcode_scan`
Manifest-Package: `com.yourcompany.barcodescan` -> `de.mintware.barcodescan`
Activity: `com.apptreesoftware.barcodescan.BarcodeScannerActivity` -> `de.mintware.barcode_scan.BarcodeScannerActivity`

iOS:
Bundle ID: `com.apptreesoftware.barcode.plugin.example` -> `de.mintware.barcode_scan.plugin.example`

Flutter:
Method channel: `com.apptreesoftware.barcode_scan` -> `de.mintware.barcode_scan`
pubspec.yaml:
 - homepage updated
 - deprecated author entry removed
 - comments removed
 - flutter.plugin.androidPackage: `com.apptreesoftware.barcode_scan` -> `de.mintware.barcode_scan`
