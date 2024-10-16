class ActivityPoints {
  final double x;
  final double y;

  ActivityPoints({required this.x, required this.y});
}

List<ActivityPoints> get activityPoints {
  final data = <double>[2, 4, 5, 3, 10, 5, 3, 4, 2];
  return List.generate(
    data.length,
    (index) => ActivityPoints(x: index.toDouble(), y: data[index]),
  ).toList();
}
