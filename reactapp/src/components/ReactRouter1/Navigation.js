import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';
 
const Navigation = () =>{
    return(
        <>
        <div className="container">
            <nav>
                
                <ul>
                    {/* <li> */}
                    {/* link to href ko jaga to lehchhau */}
                        {/* <link to="/"> Home</link>
                        <link to="/about">About</link>
                        <link to="/contact"> Contact</link>
                    </li> */}

                    {/* through navlink we can create with proper styling */}

{/*  yaha pani exact le exact path ma click garda matra dekhauchha*/}
                    <li><NavLink to="/"  activeStyle=
                    {{fontWeight:"Bold",
                     color:"red"}}
                     exact>Home</NavLink></li>

                    <li><NavLink to="/about" activeStyle={{
                        fontWeight:"Bold",
                        color:"red"
                    }}
                    exact>About</NavLink></li>
                    
                    <NavLink exact activeClassName='active_class' to="/searchfilter">
                    SearchFilter
                    </NavLink>


                    <li><NavLink to="/contact" 
                    style={(isActive)=>({
                        color:isActive?"green" :"blue"
                    })}
                     >Contact</NavLink></li>

                    <li><NavLink to="/post/mobile" 
                    style={(isActive)=>({
                        color:isActive?"green" :"blue"
                    })}
                     >Post</NavLink></li>

                    <li><NavLink to="/post/mobile/1" 
                    style={(isActive)=>({
                        color:isActive?"green" :"blue"
                    })}
                     >Post with Id</NavLink></li>

                <li><NavLink to="/services" activeStyle={{
                        fontWeight:"Bold",
                        color:"red"
                    }}
                    exact>Services</NavLink></li>

                    
                     {/* by default name aauxa vanna ko lagi we use */}

                <li><NavLink to="/useparams/bishal/shrestha" activeStyle={{
                        fontWeight:"Bold",
                        color:"red"
                    }}
                    exact>User</NavLink></li>


                

                </ul>
            </nav>
            </div>
        </>
    )
}

export default Navigation;