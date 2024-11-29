import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';

class MyCalendar extends StatefulWidget {
  const MyCalendar({super.key});

  @override
  State<MyCalendar> createState() => _MyCalendarState();
}

class _MyCalendarState extends State<MyCalendar> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFF5F5F7)),
      ),
      child: TableCalendar(
        firstDay: DateTime.utc(2010, 10, 16),
        lastDay: DateTime.utc(2030, 3, 14),
        focusedDay: DateTime.now(),
        calendarFormat: CalendarFormat.week,
        headerStyle: const HeaderStyle(
          titleCentered: true,
          titleTextStyle: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          formatButtonVisible: false
        ),
        calendarStyle: const CalendarStyle(
          todayDecoration: BoxDecoration(color: Color(0xFF546FFF), borderRadius: BorderRadius.all(Radius.circular(30))),
        ),
      ),
    );
  }
}
