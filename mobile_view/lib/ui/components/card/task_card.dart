import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_sliders/sliders.dart';

class TaskCard extends StatefulWidget {
  final String image;
  final String name;
  final String title;
  final double percentage;
  final String time;
  const TaskCard(
      {super.key,
      required this.image,
      required this.name,
      required this.percentage,
      required this.time,
      required this.title});

  @override
  State<TaskCard> createState() => _TaskCardState();
}

class _TaskCardState extends State<TaskCard> {
  double percentageValue = 0;

@override
  void initState() {
    percentageValue = widget.percentage;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(15),
      decoration: const BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.all(Radius.circular(10))),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
                width: double.infinity,
                child: Image.asset(
                  widget.image,
                  width: double.infinity,
                  fit: BoxFit.fill,
                )),
            const SizedBox(
              height: 10,
            ),
            Text(
              widget.name,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            const SizedBox(
              height: 5,
            ),
            Text(
              widget.title,
              style: const TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w300,
                  color: Color(0XFF54577A)),
            ),
            const SizedBox(
              height: 15,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'Progress',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
                Text(
                  '${percentageValue.toInt().toString()}%',
                  style: const TextStyle(
                      color: Color(0XFF546FFF),
                      fontSize: 16,
                      fontWeight: FontWeight.w300),
                ),
              ],
            ),
            SfSlider(
              value: percentageValue,
              onChanged: (dynamic value) => {
                setState((){
                  percentageValue = value;
                })
              },
              min: 0.0,
              max: 100.0,
              activeColor: const Color(0xFF546FFF),
              inactiveColor: const Color(0xFFBAC8FF),
              stepSize: 5.0,
              enableTooltip: true,
            ),
            const SizedBox(
              height: 10,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Flex(
                  direction: Axis.horizontal,
                  children: [
                    const Icon(Icons.access_time_outlined),
                    Text(
                      widget.time,
                      style: const TextStyle(
                          fontSize: 16, color: Color(0xFF141522)),
                    )
                  ],
                ),
                Image.asset('lib/assets/Student.png')
              ],
            )
          ],
        ),
      ),
    );
  }
}
