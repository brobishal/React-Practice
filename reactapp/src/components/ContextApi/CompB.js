import React, {useContext} from 'react';
import CompC from './CompC';
// here we use intead of consumer we use useContetxt()

import { FirstName,LastName } from './App';
const CompB = () =>{
    // je pani hook xateslai functional componet ko top ma lekhnu parchha
    // insead of access value using consumer we use useContext()
//without using consumer we use eaily and get value using 
     const fname = useContext(FirstName);
     const lname=useContext(LastName);
    return(
        <>
            <h1>This is component B</h1>
            <h1>My name is {fname}{lname}</h1>

        </>
    )
}

export default CompB;
