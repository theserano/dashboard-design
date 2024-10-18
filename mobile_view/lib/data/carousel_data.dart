

class MonthlyMentors {
  final String image;
  final String name;
  final String title;
  final bool followed;
  final String task;
  final String review;

  MonthlyMentors({ required this.image, required this.name, required this.title, required this.followed, required this.review, required this.task});
}

List<MonthlyMentors> monthlyData = [
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Curious George', title: 'UI/UX Design', followed: false, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Late George', title: 'Software Design', followed: true, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Fun George', title: 'Developer', followed: true, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Guy George', title: 'Engineer', followed: false, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Stuff George', title: 'UI/UX Design', followed: true, review: '4,7  (750 Reviews)', task: '40 Tasks'),
  MonthlyMentors(image: 'lib/assets/Photo.png', name: 'Mr George', title: 'Developer', followed: false, review: '4,7  (750 Reviews)', task: '40 Tasks'),
];