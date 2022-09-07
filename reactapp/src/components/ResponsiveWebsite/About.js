import React from 'react';
import web from '../../../src/Images/about.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () =>{
    return(
        <>
        {/* yes componet ma as a props pass garna lageko
         */}
         {/* 3 ota pros pass gareko chhau */}
         {/* props ma euta name property , arko imagesrc hai jo image change garna 
         ko lagi ani arko props pass garne ho that is visit means 
         button ma click garda kaha visit garen ho
         
         ek or btnname */}
            <Common 
            name="Welcome to About Page" 
            imgsrc={web} 
            visit="/contact" 
            btnname="Contact Now"

            />
        </>
    )
}

export default About;
