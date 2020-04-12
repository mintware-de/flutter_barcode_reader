/// Android specific scan options
class AndroidOptions {
  /// You can optionally set aspect ratio tolerance level
  /// that is used in calculating the optimal Camera preview size.
  /// This parameter is only supported on Android devices.
  final double aspectTolerance;

  /// Set to true to enable auto focus
  /// This parameter is only supported on Android devices.
  final bool useAutoFocus;

  /// Create Android specific scan options
  const AndroidOptions({
    this.aspectTolerance = 0.5,
    this.useAutoFocus = true,
  })  : assert(aspectTolerance != null),
        assert(useAutoFocus != null);
}
