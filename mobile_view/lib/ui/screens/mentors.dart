import 'package:flutter/material.dart';

class Mentors extends StatefulWidget {
  const Mentors({super.key});

  @override
  State<Mentors> createState() => _MentorsState();
}

class _MentorsState extends State<Mentors> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Text('mentors'),
    );
  }
}