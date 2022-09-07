// this is the 57 tutorial from thapa techincal

import React from 'react';


// instead of Link we use NavLink

import {NavLink} from "react-router-dom";
import './Style.css';

const NavbarMenu = () =>{
    return(
        <>
        {/* this we donot use yesle reload dekhauxa and react router ye nai bolta*/}
            {/* <a href="/">About Us</a>
            <a href="/contact">contact</a> */} 
{/* anchor tag ke badke we use Link */}
{/* In Link ma kasailai kehi veja ho vane instead of href we use from and to */}
           {/* from means kon vej raha hai and to means kaslai vej raha hai */}
            {/* exact yehi class active ho toh */}
            <NavLink exact activeClassName='active_class' to="/">About Us</NavLink>
            <br/>
            <NavLink exact activeClassName='active_class' to="/contact">Contact Us</NavLink>

        </>
    )
}

export default NavbarMenu;
