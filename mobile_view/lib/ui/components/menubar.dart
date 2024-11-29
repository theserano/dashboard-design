import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:mobile_view/ui/screens/mentors.dart';
import 'package:mobile_view/ui/screens/overview.dart';
import 'package:mobile_view/ui/screens/settings.dart';
import 'package:mobile_view/ui/screens/task.dart';

class MyMenuBar extends StatefulWidget {
  const MyMenuBar({super.key});

  @override
  State<MyMenuBar> createState() => _MyMenuBarState();
}

class _MyMenuBarState extends State<MyMenuBar> {
  bool showMenu = false;
  int currentIndex = 0;

  late List<Widget> pages;
  late Overview overview;
  late Task task;
  late Mentors mentors;
  late Settings settings;

  @override
  void initState() {

    const overview = Overview();
    const task = Task();
    const mentors = Mentors();
    const settings = Settings();

    pages = [overview, task, mentors, settings];

    super.initState();
  }

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
                  padding: const EdgeInsets.only(left: 5),
                  child: Visibility(
                    visible: showMenu,
                    child: SingleChildScrollView(
                      // Added scrolling
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
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
          Expanded(
            child: pages[currentIndex],
          )
        ],
      ),
    );
  }

  Widget buildList() {
    final List<MenuItem> list = [
      MenuItem(name: 'Overview', icon: 'lib/assets/overview.svg', index: 0),
      MenuItem(name: 'Task', icon: 'lib/assets/task.svg', index: 1),
      MenuItem(name: 'Mentors', icon: 'lib/assets/user-menu.svg', index: 2),
      MenuItem(name: 'Settings', icon: 'lib/assets/settings.svg', index: 3),
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: list.map((item) {
        return GestureDetector(
          onTap: () {
            setState(() {
              currentIndex = item.index;
              showMenu = false;
            });
          },
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 500),
            padding: const EdgeInsets.all(10.0),
            width: 150,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8.0),
              color: currentIndex == item.index ? const Color(0xFFF5F5F7) : const Color(0xFFFFFFFF)
            ),
            child: Row(
              children: [
                SvgPicture.asset(item.icon, semanticsLabel: 'image'),
                const SizedBox(
                  width: 10,
                ),
                Text(
                  item.name,
                  style:
                      const TextStyle(fontSize: 16, color: Color(0xFF8E92BC)),
                ),
              ],
            ),
          ),
        );
      }).toList(),
    );
  }
}

class MenuItem {
  String name;
  String icon;
  int index;

  MenuItem({required this.name, required this.icon, required this.index});
}
