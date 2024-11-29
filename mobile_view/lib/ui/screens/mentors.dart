import 'package:flutter/material.dart';
import 'package:mobile_view/data/carousel_data.dart';
import 'package:mobile_view/ui/components/card/mentor_card.dart';
import 'package:mobile_view/ui/components/carousel.dart';

class Mentors extends StatefulWidget {
  const Mentors({super.key});

  @override
  State<Mentors> createState() => _MentorsState();
}

class _MentorsState extends State<Mentors> {
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
                  'Explore Mentors',
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
                          hintText: "Search Mentors",
                          hintStyle: const TextStyle(color: Color(0xFF8E92BC)),
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
                            border: Border.all(color: const Color(0xFFF5F5F7)),
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
                color: Color.fromARGB(255, 247, 247, 247)),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
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
                buildCards(),
                const SizedBox(height: 20,)
              ],
            ),
          ),
          ],
        ),
      )
    );
  }

  Widget buildCards() {
    return Flex(
      direction: Axis.vertical,
      children: monthlyData
          .map((item) => Container(
            padding: const EdgeInsets.all(8),
            child: MentorCard(
              image: item.image,
              name: item.name,
              title: item.title,
              followed: item.followed,
              review: item.review,
              task: item.task))
          ).toList(),
    );
  }
}