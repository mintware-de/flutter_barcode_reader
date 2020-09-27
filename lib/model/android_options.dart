/// Android specific scan options
class AndroidOptions {
  /// You can optionally set aspect ratio tolerance level
  /// that is used in calculating the optimal Camera preview size.
  /// This parameter is only supported on Android devices.
  final double aspectTolerance;

  /// Set to true to enable auto focus
  /// This parameter is only supported on Android devices.
  final bool useAutoFocus;

  /// Change the title of activities
  /// This parameter is only supported on Android devices.
  final String title;

  /// Set statusbar color
  /// This parameter is only supported on Android devices.
  final String statusbarColor;

  /// Set actionBar color
  /// This parameter is only supported on Android devices.
  final String actionBarColor;

  /// Create Android specific scan options
  const AndroidOptions({
    this.aspectTolerance = 0.5,
    this.useAutoFocus = true,
    this.title = "",
    this.statusbarColor = "#000000",
    this.actionBarColor = "#000000",
  })  : assert(aspectTolerance != null),
        assert(useAutoFocus != null),
        assert(title != null),
        assert(statusbarColor != null),
        assert(actionBarColor != null);
}
