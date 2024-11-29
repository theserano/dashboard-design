import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class MyCarousel extends StatefulWidget {
  final List<Widget> items;
  final String text;
  final double height;
  const MyCarousel(
      {super.key,
      required this.items,
      required this.text,
      required this.height});

  @override
  State<MyCarousel> createState() => _MyCarouselState();
}

class _MyCarouselState extends State<MyCarousel> {
  int _currentIndex = 0;
  final CarouselSliderController _carouselController =
      CarouselSliderController();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              widget.text,
              style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF141522)),
            ),
            Row(
              children: [
                IconButton(
                    onPressed: () {
                      _carouselController.previousPage();
                    },
                    icon: const Icon(
                      Icons.arrow_back_ios_new_rounded,
                      color: Color(0xFF141522),
                    )),
                IconButton(
                    onPressed: () {
                      _carouselController.nextPage();
                    },
                    icon: const Icon(
                      Icons.arrow_forward_ios_rounded,
                      color: Color(0xFF141522),
                    )),
              ],
            )
          ],
        ),
        const SizedBox(
          height: 10,
        ),
        CarouselSlider(
          items: widget.items,
          carouselController: _carouselController,
          options: CarouselOptions(
            height: widget.height,
            autoPlay: false,
            viewportFraction: 1,
            enlargeCenterPage: true,
            onPageChanged: (index, reason) {
              setState(() {
                _currentIndex = index;
              });
            },
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: widget.items.asMap().entries.map((entry) {
            return GestureDetector(
              onTap: () => setState(() {
                _currentIndex = entry.key;
                _carouselController.animateToPage(entry.key,
                    curve: Curves.bounceIn);
              }),
              child: Container(
                width: 6.0,
                height: 6.0,
                margin:
                    const EdgeInsets.symmetric(vertical: 8.0, horizontal: 4.0),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: _currentIndex == entry.key
                      ? const Color(0xFF141522)
                      : Colors.grey,
                ),
              ),
            );
          }).toList(),
        ),
      ],
    );
  }
}
