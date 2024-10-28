
class MonthlyMentors {
  final String image;
  final String name;
  final String title;
  final bool followed;
  final String task;
  final String review;

  MonthlyMentors({ required this.image, required this.name, required this.title, required this.followed, required this.review, required this.task});
}

class TaskClass {
  final String image;
  final String name;
  final String title;
  final double percentage;
  final String time;

  TaskClass({required this.image, required this.name, required this.percentage, required this.time, required this.title});
}

List<MonthlyMentors> monthlyData = [
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Curious George', title: 'UI/UX Design', followed: false, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Late George', title: 'Software Design', followed: true, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Fun George', title: 'Developer', followed: true, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Guy George', title: 'Engineer', followed: false, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Stuff George', title: 'UI/UX Design', followed: true, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Mr George', title: 'Developer', followed: false, review: '4,7  (750 Reviews)', task: '40 Tasks'),
];

List<TaskClass> upcomingTask = [
  TaskClass(image: 'lib/assets/comp.png', name: 'Creating Mobile App Design', percentage: 75, time: '3 Days Left', title: 'UI UX Design'),
  TaskClass(image: 'lib/assets/comp.png', name: 'Developing Website Design', percentage: 55, time: '2 Days Left', title: 'Web Designer'),
  TaskClass(image: 'lib/assets/comp.png', name: 'Creating Designs', percentage: 90, time: '30 Days Left', title: 'UI UX Design'),
  TaskClass(image: 'lib/assets/comp.png', name: 'Developing Mobile App Design', percentage: 75, time: '3 Days Left', title: 'UI UX Design'),
  TaskClass(image: 'lib/assets/comp.png', name: 'Data Analysis', percentage: 80, time: '1 Days Left', title: 'Data Engineer'),
];