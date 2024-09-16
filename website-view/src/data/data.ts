import { UserProps } from './../components/General/Card';
import guy from "../assets/guy.svg";
import girl from "../assets/girl.svg";
import task1 from "../assets/task1.svg";
import task2 from "../assets/task2.svg";
import task3 from "../assets/task3.svg";
import task4 from "../assets/task4.svg";
import task5 from "../assets/task5.svg";
import task6 from "../assets/task6.svg";
import task7 from "../assets/task7.svg";
import task8 from "../assets/task8.svg";


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