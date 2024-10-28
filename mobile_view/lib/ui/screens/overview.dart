import 'package:flutter/material.dart';
import 'package:mobile_view/data/carousel_data.dart';
import 'package:mobile_view/data/chart_data.dart';
import 'package:mobile_view/ui/components/activity_chart.dart';
import 'package:mobile_view/ui/components/card/task_card.dart';
import 'package:mobile_view/ui/components/carousel.dart';
import 'package:mobile_view/ui/components/card/mentor_card.dart';
import 'package:percent_indicator/percent_indicator.dart';

class Overview extends StatefulWidget {
  const Overview({super.key});

  @override
  State<Overview> createState() => _OverviewState();
}

class _OverviewState extends State<Overview> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(
                height: 20,
              ),
              const Text('Hi, Zoe Serano',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.w600)),
              const Text("Let's finish your task today!"),
              const SizedBox(
                height: 20,
              ),
              Container(
                padding: const EdgeInsets.all(20),
                decoration: const BoxDecoration(
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  color: Color(0xFF141522),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Running Task',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          '65',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 32,
                              fontWeight: FontWeight.bold),
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        CircularPercentIndicator(
                          animation: true,
                          radius: 40.0,
                          lineWidth: 4.0,
                          percent: 0.45,
                          center: const Text(
                            "45%",
                            style: TextStyle(
                                color: Colors.white,
                                fontSize: 20,
                                fontWeight: FontWeight.bold),
                          ),
                          progressColor: const Color(0xFF546FFF),
                          backgroundColor: const Color(0xFF0B192C),
                        ),
                        const SizedBox(
                          width: 20,
                        ),
                        const Column(
                          children: [
                            Text('100',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 22,
                                    fontWeight: FontWeight.bold)),
                            Text(
                              'Task',
                              style: TextStyle(
                                  color: Color(0xFF8E92BC), fontSize: 16),
                            )
                          ],
                        )
                      ],
                    )
                  ],
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              Container(
                padding: const EdgeInsets.all(20),
                width: double.infinity,
                decoration: const BoxDecoration(
                    color: Color(0xFFF5F5F7),
                    borderRadius: BorderRadius.all(Radius.circular(10))),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Activity',
                      style:
                          TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    ActivityChart(points: activityPoints),
                  ],
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              MyCarousel(
                items: monthlyData
                    .map((item) => MentorCard(
                        image: item.image,
                        name: item.name,
                        title: item.title,
                        followed: item.followed,
                        review: item.review,
                        task: item.task))
                    .toList(),
                text: 'Monthly Mentors',
                height: 130,
              ),
              const SizedBox(
                height: 20,
              ),
              MyCarousel(
                  items: upcomingTask.map((item) => TaskCard(
                      image: item.image,
                      name: item.name,
                      percentage: item.percentage,
                      time: item.time,
                      title: item.title)).toList(),
                  text: 'Upcoming Task',
                  height: 350)
            ],
          ),
        ),
      ),
    );
  }
}
