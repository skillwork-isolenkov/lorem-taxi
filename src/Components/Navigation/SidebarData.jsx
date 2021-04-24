import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <SiIcons.SiAboutDotMe />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <FaIcons.FaServicestack />,
        cName: 'nav-text'
    },
    {
        title: 'News',
        path: '/news',
        icon: <RiIcons.RiNewspaperFill />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <RiIcons.RiContactsBook2Fill />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <RiIcons.RiLoginBoxLine />,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <RiIcons.RiRegisteredFill />,
        cName: 'nav-text'
    },
]