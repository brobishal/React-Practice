//map methods in array
/* 
The map() methods creates a new array with the result of 
calling a funciton for array element
The map() methods calls the provided function once for 
each element in an aray, in order.

Syntax
function - it is callback function
arr - it is optional yesle yo represent garcha ki konsa existing array ko map karwa rahe ho
array.map(function(currentValue, index, arr), thisValue)

currentValue  - required. The value of the current element
Index Optional - The array index of the current element
arr Optional  - The array object the current element belongs to


 


*/

// import Netflix from "./components/Netflix/Netflix"

// import React from 'react';
// import ReactDOM from 'react-dom';


// const older =  ['vinod','bahadur','thapa'];
// console.log(older[0]);
// console.log("hello");

//...........................................................................................
// //if else condition in react js
// import React from 'react';
// import ReactDOM from 'react-dom';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//     <>
//     <App/>
//     </>,
//     document.getElementById('root')
// );


//................

//...............................#26 Ternary operator........................


//syntax - condition ? expifTrue : expifFalse
//parameters - 
//condition : An expression whose value is used as a condition
//expifTrue: An expression which is evaluated if the condition
//evaluate to a truthy
//value (one which equals or can be convered to true)

//expifFalse: an expression which is executed if the condition is
//false(that is has a value which can be converted to false)

// const MyFun = () =>{
//    return((favSeries ==Netflix) ? return <Netflix/>:return <Amazon/>);

// }

// import React from 'react';
// import ReactDOM from 'react-dom';
// let a;
// let b;
// const MyFun = (a,b) =>{
//        return( a>b? a + "is true": b + "is false");
    
// }

// ReactDOM.render(
//     <>
//         {MyFun(9,3)}
//     </>,
//     document.getElementById('root')

// );


//...............................end.............................

//....................................28 Sots machine games........................
 
// import React from  'react';
// import ReactDOM from 'react-dom';
// // import App from './App';
// ReactDOM.render(
//     <>      

//     {/* <App/> */}
//     </>,
//     document.getElementById('root')

  
// );


//react hooks


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import UseState from './components/ReactHooks/UseState';
// import Router from './components/ReactRouter/Router';

// //we need to import BroswerRouter from react-router-dom

// import {BrowserRouter} from 'react-router-dom';
// ReactDOM.render(  
//     <>
//         {/* <UseState/> */}

//         {/* jati pani component render karna hai wo BrowseerRouter ke under lekhnu parch
//          */}

//          <BrowserRouter>
//          <Router/>
//          </BrowserRouter>
       
//     </>,
//     document.getElementById('root')
// );


//end reactrouter..............................................

//..........................................

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Sidebar from './components/Sidebar/Sidebar';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// ReactDOM.render(
//     <>
//         <Router>
//             <Sidebar/>
//             <Switch>
//                 <Route path='/'/>
//             </Switch>
             
//         </Router> 
        
//         </>,
//     document.getElementById('root')
// );

//...........................
//creating a navbar menu 

import React from 'react';
import ReactDOM from 'react-dom';
import ReactHook from './components/ReactHookChall6/ReactHook';
import './index.scss';
// import App from './App';

// import ReactHook from './components/ReactHookChall6/ReactHook';
// import DigitalClock from './components/ReactMiniProject32/DigitalClock';

// import Event from './components/HandlingEvents33/Event';
// import Form from './components/Forms34/Form';
// import LoginForm from './components/LoginForm35/LoginForm';

// import Category from './components/Category';

// import Categorydata from './components/Categorydata';

// import App from './App'; 

// import Catedata from './Catedata';
// import SpreadOperator from './components/SpreadOperator/SpreadOperator';

// import FormMultipleInput from './components/HandlingFormInput/FormMultipleInput';

// import MaterialUi from './components/MateriaUi/MaterialUi'

// import Accordion from './components/Accordion/Accordion';

// import App from './components/ContextApi/App'
// import UseEffect from './components/UseEffect/UseEffect';
// import ReactHookChallg from './components/ReactHookChallenge/ReactHookChallg';
// import ReactApiPokemon from './components/ReactApiPokemon/ReactApiPokemon';
// import ReactRouter from './components/ReactRouter1/ReactRouter';

// import Bootstrap from "./components/Bootstrap/Bootstrap";

// import App from './components/ResponsiveWebsite/App';
// import Todo from '../src/components/TodoApp/TodoApp.js';
// import UpdatedTodo from '../src/components/TodoApp/UpdatedTodo.js';
// import GalleryReact from '../src/components/TabMenu/GalleryReact';

// import Singin from '../src/components/SingupForm/Singin';
import ReactRedux from '../src/components/Redux/ReactRedux';

ReactDOM.render(

    <>

    {/* <App/> */}
    {/* <Catedata/> */}


    {/* <App/> */}
    {/* <Categorydata/> */}
    {/* <Category/> */}
    {/* <DigitalClock/> */}

    {/* <ReactHook/> */}
    {/* <Event/> */}
    {/* <Form/> */}
    
    {/* <LoginForm/> */}

    {/* <App/> */}

    {/* <SpreadOperator/> */}
    {/* <FormMultipleInput/> */}
    {/* <MaterialUi/> */}
    {/* <Accordion/> */}
    {/* <App/> */}
    {/* <UseEffect/> */}
    {/* <ReactHookChallg/> */}
    {/* <ReactApiPokemon/> */}
    {/* <ReactRouter/> */}
    {/* <Bootstrap/> */}


{/* FOR WEBSITE CREATE */}
    {/* <App/> */}
    {/* <Todo/> */}

    {/* <UpdatedTodo/> */}
    {/* <GalleryReact/> */}
    {/* <Singin/> */}

    <ReactRedux/>

    </>,
    

document.getElementById('root')
);
// const fullName =['Bishal','shrestha'];

// const biodata = [1, ...fullName, 26, "male"];
// alert(biodata);
// console.log(fullName);
// console.log(biodata);
