import { MentorProps, UserProps } from './../components/General/Card';
import guy from "../assets/guy.svg";
import girl from "../assets/girl.svg";
import task1 from "../assets/task1.svg";
import task2 from "../assets/task2.svg";
import task3 from "../assets/task3.svg";
import task4 from "../assets/task4.svg";
import task5 from "../assets/task5.svg";
import task7 from "../assets/task7.svg";
import task8 from "../assets/task8.svg";
import m1 from "../assets/mentors/m1.svg";
import m2 from "../assets/mentors/m2.svg";
import m3 from "../assets/mentors/m3.svg";
import m4 from "../assets/mentors/m4.svg";
import m5 from "../assets/mentors/m5.svg";
import m6 from "../assets/mentors/m6.svg";


export const monthlyMentorsData: UserProps[] = [
    {
        name: 'Curious George',
        title: 'UI UX Design',
        followed: false,
        image: guy,
        task: 40,
        review: '4,7  (750 Reviews)'
    },
    {
        name: 'Abraham Lincoln',
        title: '3D Design',
        followed: true,
        image: girl,
        task: 32,
        review: '4,9  (510 Reviews)'
    },
    {
        name: 'Curious George',
        title: 'UI UX Design',
        followed: false,
        image: guy,
        task: 40,
        review: '4,7  (750 Reviews)'
    },
    {
        name: 'Abraham Lincoln',
        title: '3D Design',
        followed: true,
        image: girl,
        task: 32,
        review: '4,9  (510 Reviews)'
    },
    {
        name: 'Curious George',
        title: 'UI UX Design',
        followed: false,
        image: guy,
        task: 40,
        review: '4,7  (750 Reviews)'
    },
    {
        name: 'Abraham Lincoln',
        title: '3D Design',
        followed: true,
        image: girl,
        task: 32,
        review: '4,9  (510 Reviews)'
    },
    {
        name: 'Curious George',
        title: 'UI UX Design',
        followed: false,
        image: guy,
        task: 40,
        review: '4,7  (750 Reviews)'
    },
    {
        name: 'Abraham Lincoln',
        title: '3D Design',
        followed: true,
        image: girl,
        task: 32,
        review: '4,9  (510 Reviews)'
    },
]

interface taskProps {
  image: string;
  title: string;
  base: string;
  progress: number;
  time: string;
}

export const upcomingTaskData: taskProps[] = [
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 75,
        time: '4 Days Left',
    },
    {
        image: task1,
        title: "Creating Awesome Mobile Apps",
        base: "UI /UX Designer",
        progress: 90,
        time: '2 Days Left',
    },
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 75,
        time: '4 Days Left',
    },
    {
        image: task1,
        title: "Creating Awesome Mobile Apps",
        base: "UI /UX Designer",
        progress: 90,
        time: '2 Days Left',
    },
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 75,
        time: '4 Days Left',
    },
    {
        image: task1,
        title: "Creating Awesome Mobile Apps",
        base: "UI /UX Designer",
        progress: 90,
        time: '2 Days Left',
    },
]

export const timeLimitData: taskProps[] = [
    {
        image: task3,
        title: "Creating Awesome Mobile Apps",
        base: "UI /UX Designer",
        progress: 90,
        time: '1 Hour',
    },
    {
        image: task4,
        title: "Creating Fresh Website",
        base: "Web Developer",
        progress: 85,
        time: '2 Hour',
    },
    {
        image: task5,
        title: "Creating Color Palletes",
        base: "UI /UX Designer",
        progress: 100,
        time: '1 Hour',
    },
    {
        image: task7,
        title: "Awesome Flutter Apps",
        base: "Mobile Developer",
        progress: 90,
        time: '3 Hour',
    },
    {
        image: task3,
        title: "Creating Awesome Mobile Apps",
        base: "UI /UX Designer",
        progress: 90,
        time: '1 Hour',
    },
    {
        image: task4,
        title: "Creating Fresh Website",
        base: "Web Developer",
        progress: 85,
        time: '2 Hour',
    },
    {
        image: task5,
        title: "Creating Color Palletes",
        base: "UI /UX Designer",
        progress: 100,
        time: '1 Hour',
    },
    {
        image: task7,
        title: "Awesome Flutter Apps",
        base: "Mobile Developer",
        progress: 90,
        time: '3 Hour',
    },
    {
        image: task3,
        title: "Creating Awesome Mobile Apps",
        base: "UI /UX Designer",
        progress: 90,
        time: '1 Hour',
    },
    {
        image: task4,
        title: "Creating Fresh Website",
        base: "Web Developer",
        progress: 85,
        time: '2 Hour',
    },
    {
        image: task5,
        title: "Creating Color Palletes",
        base: "UI /UX Designer",
        progress: 100,
        time: '1 Hour',
    },
    {
        image: task7,
        title: "Awesome Flutter Apps",
        base: "Mobile Developer",
        progress: 90,
        time: '3 Hour',
    },
    {
        image: task3,
        title: "Creating Awesome Mobile Apps",
        base: "UI /UX Designer",
        progress: 90,
        time: '1 Hour',
    },
    {
        image: task4,
        title: "Creating Fresh Website",
        base: "Web Developer",
        progress: 85,
        time: '2 Hour',
    },
    {
        image: task5,
        title: "Creating Color Palletes",
        base: "UI /UX Designer",
        progress: 100,
        time: '1 Hour',
    },
    {
        image: task7,
        title: "Awesome Flutter Apps",
        base: "Mobile Developer",
        progress: 90,
        time: '3 Hour',
    },
]

export const newTaskData: taskProps[] = [
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 85,
        time: '4 Days Left',
    },
    {
        image: task7,
        title: "Mobile App Design",
        base: "UI /UX Design",
        progress: 65,
        time: '3 Days Left',
    },
    {
        image: task8,
        title: "Creating Mobile Apps",
        base: "Android Developer",
        progress: 95,
        time: '1 Days Left',
    },
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 85,
        time: '4 Days Left',
    },
    {
        image: task7,
        title: "Mobile App Design",
        base: "UI /UX Design",
        progress: 65,
        time: '3 Days Left',
    },
    {
        image: task8,
        title: "Creating Mobile Apps",
        base: "Android Developer",
        progress: 95,
        time: '1 Days Left',
    },
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 85,
        time: '4 Days Left',
    },
    {
        image: task7,
        title: "Mobile App Design",
        base: "UI /UX Design",
        progress: 65,
        time: '3 Days Left',
    },
    {
        image: task8,
        title: "Creating Mobile Apps",
        base: "Android Developer",
        progress: 95,
        time: '1 Days Left',
    },
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 85,
        time: '4 Days Left',
    },
    {
        image: task7,
        title: "Mobile App Design",
        base: "UI /UX Design",
        progress: 65,
        time: '3 Days Left',
    },
    {
        image: task8,
        title: "Creating Mobile Apps",
        base: "Android Developer",
        progress: 95,
        time: '1 Days Left',
    },
    {
        image: task2,
        title: "Creating Mobile App Design",
        base: "UI /UX Design",
        progress: 75,
        time: '3 Days Left',
    },
    {
        image: task3,
        title: "Creating Perfect Website",
        base: "Web Development",
        progress: 85,
        time: '4 Days Left',
    },
    {
        image: task7,
        title: "Mobile App Design",
        base: "UI /UX Design",
        progress: 65,
        time: '3 Days Left',
    },
    {
        image: task8,
        title: "Creating Mobile Apps",
        base: "Android Developer",
        progress: 95,
        time: '1 Days Left',
    },
]

export const mentorsData: MentorProps[] = [
    {
        name: 'Jessica Jane',
        title: 'Web Developer',
        followed: false,
        image: m1,
        task: 40,
        review: '4,7  (750 Reviews)',
        text: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . "
    },
    {
        name: 'Alex Stanton',
        title: 'UI/UX Designer',
        followed: true,
        image: m2,
        task: 60,
        review: '4,9  (970 Reviews)',
        text: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI / UX  . . . "
    },
    {
        name: 'Antoine Griezmann',
        title: 'Android Developer',
        followed: false,
        image: m3,
        task: 50,
        review: '4,8 (830 Reviews)',
        text: "Hi, I'm Antoine Griezmann. I'm an Android Developer at Google company . . . "
    },
    {
        name: 'Anna White',
        title: '3D Designer',
        followed: true,
        image: m4,
        task: 60,
        review: '4,8 (870 Reviews)',
        text: "Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ."
    },
    {
        name: 'Richard Kyle',
        title: '2D Designer',
        followed: false,
        image: m4,
        task: 60,
        review: '4,7 (730 Reviews)',
        text: "Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . ."
    },
    {
        name: 'Julia Philips',
        title: 'IOS Developer',
        followed: false,
        image: m4,
        task: 60,
        review: '4,9 (910 Reviews)',
        text: "Hi, I'm Julia Philips. I'm a senior manager at Apple company . . ."
    },
]