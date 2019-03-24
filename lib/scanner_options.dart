class ScanOptions {
  final String flashOnText;
  final String flashOffText;

  ScanOptions({
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
