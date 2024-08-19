import { IconType } from 'react-icons';
import { HiOutlineViewGrid, HiOutlineBookOpen, HiOutlineUserGroup } from "react-icons/hi";
import { LuMessageSquareDashed, LuSettings } from "react-icons/lu";

export interface menuProps {
    title: string,
    icon: IconType,
    link: string
}

export const menuItems: menuProps[] = [
    {
        title: "Overview",
        icon: HiOutlineViewGrid,
        link: "/"
    },
    {
        title: "Task",
        icon: HiOutlineBookOpen,
        link: "/task"
    },
    {
        title: "Mentors",
        icon: HiOutlineUserGroup,
        link: "/mentors"
    },
    {
        title: "Message",
        icon: LuMessageSquareDashed,
        link: "/message"
    },
    {
        title: "Settings",
        icon: LuSettings,
        link: "/settings"
    }
]