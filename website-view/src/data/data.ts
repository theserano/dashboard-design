import { UserProps } from './../components/General/Card';
import guy from "../assets/guy.svg";
import girl from "../assets/girl.svg";
import task1 from "../assets/task1.svg";
import task2 from "../assets/task2.svg";
import task3 from "../assets/task3.svg";


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