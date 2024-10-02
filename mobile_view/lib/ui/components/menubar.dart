import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class MyMenuBar extends StatefulWidget {
  const MyMenuBar({super.key});

  @override
  State<MyMenuBar> createState() => _MyMenuBarState();
}

class _MyMenuBarState extends State<MyMenuBar> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: const Color(0xFFFFFFFF),
        // padding: const EdgeInsets.only(top: 20, bottom: 20),
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.only(
                  top: 70, bottom: 20, left: 10, right: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                      decoration: BoxDecoration(
                          border: Border.all(color: const Color(0XFF8E92BC)),
                          borderRadius: BorderRadius.circular(30)),
                      child: IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.menu_rounded),
                        color: const Color(0xFF8E92BC),
                      )),
                  Row(
                    children: [
                      Container(
                          decoration: BoxDecoration(
                              border:
                                  Border.all(color: const Color(0XFF8E92BC)),
                              borderRadius: BorderRadius.circular(30)),
                          child: IconButton(
                            onPressed: () {},
                            icon:
                                const Icon(Icons.notifications_active_outlined),
                            color: const Color(0xFF8E92BC),
                          )),
                      const SizedBox(
                        width: 10,
                      ),
                      IconButton(
                        onPressed: () {},
                        icon: const Icon(
                          Icons.person,
                          size: 40,
                        ),
                        color: const Color(0xFF546FFF),
                      ),
                    ],
                  )
                ],
              ),
            ),
            Text('stuff')
          ],
        ),
      ),
    );
  }
}
