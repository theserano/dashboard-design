import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:mobile_view/data/chart_data.dart';

class ActivityChart extends StatelessWidget {
  final List<ActivityPoints> points;
  const ActivityChart({super.key, required this.points});

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 2,
      child: Container(
        padding: const EdgeInsets.only(top: 20, left: 0, right: 20, bottom: 20),
        decoration: const BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.all(Radius.circular(10))
        ),
        child: LineChart(
          LineChartData(
            gridData: const FlGridData(
              drawHorizontalLine: false,
              verticalInterval: 2
            ),
            backgroundColor: Colors.white,
            borderData: FlBorderData(show: false),
            titlesData: const FlTitlesData(
              topTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
              rightTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
            ),
            lineBarsData: [
              LineChartBarData(
                spots: points.map((point) => FlSpot(point.x, point.y)).toList(),
                isCurved: true,
                dotData: const FlDotData(show: false),
                barWidth: 5,
                color: const Color(0xFF141522),
                shadow: const Shadow(color: Color(0xFFEBEDF7), offset: Offset(0, 10)),
              )
            ]
          )
        ),
      ),
    );
  }
}
