import 'package:flutter/material.dart';
import 'package:mobile_view/ui/components/menubar.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: 'PlusJakartaSans',
        scaffoldBackgroundColor: Colors.white
      ),
      home: const MyMenuBar(),
    );
  }
}