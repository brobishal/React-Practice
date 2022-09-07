import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import NavbarData from './NavbarData';
import './Navbar.css';

// add style for all of the icons we import
//and warp all the content inside IconContext
// this allows customize all the icons at the top level
import {IconContext} from 'react-icons';

const Navbar = () =>{

    // define state hooks
    //here false meaning is not showing
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () =>{
        // this is going to update the value to whaterver the 
        //opposite of it is is current;y kind like a toggle
        //so iam going yo say exclamation mark sidebar so it is 
        //reversing the value of true false
        setSidebar(!sidebar)
    }

    return(
        <>
        {/* yes bata hamile all the icon lai change garna sakcau color */}
            <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu_bars">
                     <FaIcons.FaBars onClick={showSideBar}/> 
                </Link>

            </div>
            {/* yaha we se sidebar us useState hooks */}
            {/* set some state with the use state hooks so we ar going to just say sidebar
              and we are going to create this in just second and we use
              ternary operator and here we are going to sya if is true
              meaning if i clicked on the icon the sidebar is showing i want
              the class to be nav-menu active meaning that is showing
              else use colon i am gonna say nav-menu  so it basically
              hidden */}
              

            <nav className={sidebar ? 'nav_menu active' : 'nav_menu' }>

            <ul className="nav_menu_items" >
                <li className="navbar_toggle" onClick={showSideBar}>
                    <Link to="#" className="menu_bars" >
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {NavbarData.map((item, index)=>{
                    return(
                        
                        //for index
                        <li key={index} className="item.cName">
                        {/* for path */}
                            <Link to={item.path}>
                            {/* for icons*/}
                                {item.icon}
                                <span>{item.title}</span>

                            </Link>
                        </li>
                    )
                })}
                

            </ul>

            </nav>
</IconContext.Provider>
        </>
    )
}


export default Navbar;