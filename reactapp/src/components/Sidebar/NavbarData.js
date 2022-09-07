import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import './Navbar.css';

const NavbarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav_text'
    },
    {
        title:'Reports',
        path:'/report',
        icon:<IoIcons.IoIosPaper/>,
        cName: 'nav_text'
    },
    {
        title:'Product',
        path:'/product',
        icon:<FaIcons.FaCartPlus/>,
        cName: 'nav_text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoMdPeople/>,
        cName: 'nav_text'
    }, {
        title:'Message',
        path:'/message',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav_text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName: 'nav_text'
    }
]

export default NavbarData;
