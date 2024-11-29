import 'package:flutter/material.dart';
import 'package:mobile_view/data/carousel_data.dart';
import 'package:mobile_view/ui/components/card/task_card.dart';
import 'package:mobile_view/ui/components/carousel.dart';

class Task extends StatefulWidget {
  const Task({super.key});

  @override
  State<Task> createState() => _TaskState();
}

class _TaskState extends State<Task> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.only(left: 20, right: 20, bottom: 30),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Explore Task',
                    style: TextStyle(
                        color: Color(0xFF141522),
                        fontSize: 24,
                        fontWeight: FontWeight.w600),
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: "Search Task",
                            hintStyle:
                                const TextStyle(color: Color(0xFF8E92BC)),
                            enabledBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(10),
                              borderSide:
                                  const BorderSide(color: Color(0xFFF5F5F7)),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(10),
                              borderSide:
                                  const BorderSide(color: Color(0xFF8E92BC)),
                            ),
                            suffixIcon: const Icon(
                              Icons.search,
                              color: Color(0xFF8E92BC),
                            ), // Place the icon on the right
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 20,
                      ),
                      Container(
                          padding: const EdgeInsets.all(5),
                          decoration: BoxDecoration(
                              border:
                                  Border.all(color: const Color(0xFFF5F5F7)),
                              borderRadius: BorderRadius.circular(10)),
                          child: IconButton(
                              onPressed: () {},
                              icon: const Icon(Icons.filter_list_outlined,
                                  color: Color(0xFF8E92BC))))
                    ],
                  )
                ],
              ),
            ),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.only(left: 20, right: 10),
              decoration: const BoxDecoration(
                border: Border(
                  top: BorderSide(
                    color: Color(0xFFF5F5F7),
                    width: 1.0,
                  ),
                ),
                color: Color.fromARGB(255, 247, 247, 247)  
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  MyCarousel(
                      items: timeLimit
                          .map((item) => TaskCard(
                              image: item.image,
                              name: item.name,
                              percentage: item.percentage,
                              time: item.time,
                              title: item.title))
                          .toList(),
                      text: 'Time Limit',
                      height: 350),
                  const SizedBox(height: 20,),
                  MyCarousel(
                      items: newTask
                          .map((item) => TaskCard(
                              image: item.image,
                              name: item.name,
                              percentage: item.percentage,
                              time: item.time,
                              title: item.title))
                          .toList(),
                      text: 'New Task',
                      height: 350),
                      const SizedBox(
                    height: 20,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
