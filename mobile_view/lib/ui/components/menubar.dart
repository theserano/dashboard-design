import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class MyMenuBar extends StatefulWidget {
  const MyMenuBar({super.key});

  @override
  State<MyMenuBar> createState() => _MyMenuBarState();
}

class _MyMenuBarState extends State<MyMenuBar> {
  bool showMenu = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          AnimatedContainer(
            duration: const Duration(seconds: 1),
            curve: Curves.easeInOut,
            padding:
                const EdgeInsets.only(top: 70, bottom: 10, left: 10, right: 10),
            decoration: const BoxDecoration(
              color: Color(0xFFFFFFFF),
              border: Border(
                bottom: BorderSide(
                  color: Color(0xFFF5F5F7),
                  width: 1.0,
                ),
              ),
            ),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    IconButton(
                      onPressed: () {
                        setState(() {
                          showMenu = !showMenu;
                        });
                      },
                      icon: const Icon(Icons.menu_rounded),
                      color: const Color(0xFF8E92BC),
                    ),
                    Row(
                      children: [
                        Container(
                          decoration: BoxDecoration(
                            border: Border.all(color: const Color(0XFF8E92BC)),
                            borderRadius: BorderRadius.circular(30),
                          ),
                          child: IconButton(
                            onPressed: () {},
                            icon:
                                const Icon(Icons.notifications_active_outlined),
                            color: const Color(0xFF8E92BC),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Container(
                          decoration: BoxDecoration(
                            color: const Color(0xFF546FFF),
                            borderRadius: BorderRadius.circular(30),
                          ),
                          child: IconButton(
                            onPressed: () {},
                            icon: const Icon(Icons.person, size: 35),
                            color: const Color(0xFFFFFFFF),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
                AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  height: showMenu ? 230.0 : 0.0, // Ensure height is controlled
                  width: double.infinity,
                  margin: const EdgeInsets.only(top: 20),
                  child: Visibility(
                    visible: showMenu,
                    child: SingleChildScrollView(
                      // Added scrolling
                      child: Column(
                        children: [
                          Row(
                            children: [
                              SvgPicture.asset(
                                'lib/assets/book.svg',
                                semanticsLabel: 'book',
                              ),
                              const SizedBox(width: 5),
                              const Text(
                                'DNX',
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 15),
                          buildList(),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class MenuItem {
  String name;
  String icon;

  MenuItem({required this.name, required this.icon});
}

Widget buildList() {
  final List<MenuItem> list = [
    MenuItem(name: 'Overview', icon: 'lib/assets/overview.svg'),
    MenuItem(name: 'Task', icon: 'lib/assets/task.svg'),
    MenuItem(name: 'Mentors', icon: 'lib/assets/user-menu.svg'),
    MenuItem(name: 'Settings', icon: 'lib/assets/settings.svg'),
  ];

  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: list.map((item) {
      return GestureDetector(
        onTap: () {},
        child: Container(
          padding: const EdgeInsets.all(10.0),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8.0),
          ),
          child: Row(
            children: [
              SvgPicture.asset(item.icon, semanticsLabel: 'image'),
              const SizedBox(
                width: 10,
              ),
              Text(
                item.name,
                style: const TextStyle(fontSize: 16, color: Color(0xFF8E92BC)),
              ),
            ],
          ),
        ),
      );
    }).toList(),
  );
}
