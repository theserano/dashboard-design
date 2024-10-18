import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class MentorCard extends StatefulWidget {
  final String image;
  final String name;
  final String title;
  final bool followed;
  final String task;
  final String review;
  const MentorCard({super.key, required this.image, required this.name, required this.title, required this.followed, required this.review, required this.task});

  @override
  State<MentorCard> createState() => _MentorCardState();
}

class _MentorCardState extends State<MentorCard> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: Colors.grey.withOpacity(0.2))
        // boxShadow: [
        //   BoxShadow(
        //     color: Colors.grey.withOpacity(0.5),
        //     spreadRadius: 1,
        //     blurRadius: 1,
        //     offset: const Offset(1, 1),
        //   ),
        // ],
      ),
      child: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Image.asset(widget.image),
                    const SizedBox(width: 10,),
                    Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(widget.name, style: const TextStyle(fontSize: 16, color: Color(0xFF141522)),),
                      Text(widget.title, style: const TextStyle(color: Color(0xFF54577A), fontSize: 12),)
                    ],),
                  ],
                ),
                widget.followed
                    ? const Text(
                        'Followed',
                        style: TextStyle(color: Color(0xFF54577A), fontSize: 12),
                      )
                    : const Text(
                        '+ Follow',
                        style: TextStyle(color: Color(0xFF546FFF), fontSize: 12),
                      )
              ],
            ),
            const SizedBox(height: 20,),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(children: [
                  const Icon(Icons.library_books_rounded),
                  const SizedBox(width: 5,),
                  Text(widget.task, style: const TextStyle(fontSize: 14),)
                ],),
                Row(children: [
                  SvgPicture.asset('lib/assets/star.svg',),
                  const SizedBox(width: 5,),
                  Text(widget.review, style: const TextStyle(fontSize: 14),)
                ],)
              ],
            )
          ],
        ),
      ),
    );
  }
}