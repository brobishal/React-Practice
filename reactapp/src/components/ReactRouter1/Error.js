import React from 'react';
import {NavLink} from 'react-router-dom';

const Error = () =>{
    return(
        <>
            <h1>Error:404 page not found</h1>
            <p>Sorry this page doesnot exist</p>
             <NavLink to="/">Go back</NavLink>
        </>
    )
}

export default Error;