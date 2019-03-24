class ScannerOptions {
  final String flashOnText;
  final String flashOffText;

  ScannerOptions({
    this.flashOnText = "Flash On",
    this.flashOffText = "Flash Off",
  });

  dynamic toDynamic() {
    return {
      "flashOnText": flashOnText,
      "flashOffText": flashOffText,
    };
  }
}
