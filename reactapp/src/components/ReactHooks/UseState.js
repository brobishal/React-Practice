
/*
//#30 tutoral react hooks

// Hooks are the new feature introduced in the react 16.8 version
//It allows you to use state and other 
//react features without writing a class.
//Hooks are the function which "hook into"
//react state and lifecycle features
//fromt the function compoenent 

//it does not work inside classes
Hoook should always be use at the top level of
 the react function

 Node version 6 or above. NPM version 5.2 or above



React hoooks lai functional component 
ma tip ma matra lekhna sakxau

*/

// note: jaba pani hami react use garchhau camel case convension ma lekhxxau
 
//yaha count++ euta state hai ra yo directly change garna sakdaina thyau
//like 2,3,4  change garna sakdaina thyau yehi ek problem 
//thiyo functional component ma and 
//jaba pani state ki baat aati thi toh manxe haru functional component lai 
//switch garera class component use gartyo
//
import React, { useState } from 'react'; 
 import './Style.css';



 const UseState = () =>{
// const state = useState();
//  console.log(state);

//array destructring - it means array ko pani sano sano tukra ma baddinu
//taki useko bande easily use garna sakau or khelna sakau

// const name = ["Bishal","Hari","Sita"];
//    name[0]

//array decstructing

// const [Bishal,Hari,Sita] =name;
//jaha pahile yo 
//name[0]; //lekhna pad rahatha tyo mathi ko arrako value paauna ko lagi
//aba array descuctring ke bad directly yo jo - vi lekheko xau 
//yesko matlab name name ko jo array hai usko under jitna bi value xaa
//jo sabsle pahile value hunxa usko maine is variable Bishal store ma gardeko
//next time maile console ma - Bishal lekhdiyo vane yo Bishal wali value aauxa
 
// useStatme ma two value hunxa ek undefine and another function

//useState is a function which return an array with two items
//[undefined,f] here- undefined ko stateobject vanxa vane -f lai update function

//in simple java script ma function use garda it returns only one value
//but in useState use garxxau it return two items ek hota hai - current data and another hunxa, updated funtion updated data

//jab kabi useState ma koi bi value dinxxau teslai vnaxa initial data
 
//- currentData, updatedData and initial data -it means 0
//const [count,setCount] = useState(0);

const state =useState();

//useState ke parenthesis under jo bi initial value dinxau tyo value count lai milira hunxa
//setCount aba yo ek function hai ani yesma jo bi 
// value pass garxau that will be your  updated count
//ra tyo updated value count ko lagi current value hunxa

const [count,setCount] = useState(1);


 const IncrementNum = () =>{
     //updated value aba 100 count ko lagi current value samjincha
     setCount(count+1);
//   console.log(count++);
 
 };

 const DecrementNum =()=>{
     setCount(count-1);

 }
    return(
        <>
        <div className="container">
            <div className="main">
            <h1>{count}</h1>
            <button onClick={IncrementNum}>Click Me</button>
            <button onClick={DecrementNum}>Click Me</button>

        </div>
        </div>
        </>
    );
 }; 


 export default UseState;
