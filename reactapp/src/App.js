// // import React from 'react';
// // import Card from 'card';
// // import Netflix from './components/Netflix/Netflix';
// // import Amazon from './components/Amazon/Amazon';

// // const favSeries = 'netflix';
// // const App =()=>{
     
// // if(favSeries === 'netflix'){
    
// //     return <Netflix/>
// // }else{
// //     return <Amazon/>
    
// // }
// // }
// // export default App;


// //...............................28 slot machine ........
// import React from 'react';
// import './App.css';

// const SlotM = (props) =>{
//     // let x = 'Smile';
//     // let y = "Smile";
//     // let z = "Smi";
 

//     if((props.x===props.y) && (props.y===props.z)){

//             return(
//                 <>
//                     <div className="slot_inner">

//                         <h1>{x}{y}{z}</h1>
//                         <h1>This is matching </h1>
//                         <hr/>

//                     </div>
//                 </>
//             );
//     }else{
//         return(
//             <>
//                 <div className="slot_inner">

//                     <h1>{x}{y}{z}</h1>
//                     <h1>This is not matching </h1>
//                     <hr/>

//                 </div>
//             </>
//         );
        
//     }

// }

// const App = () =>{
//     return(
//         <>
//             <h1 className="heading">Welcome to <span style={{fontWeight:"bold",color:"blue"}}>Slot Machine Games </span> </h1>
            
//         <div className="Slotmachine">
//             <SlotM x="smile" y="smile" z="smile"/ >
//             <SlotM/>
//             <SlotM/>
//         </div>
  
//             {/* mathi 3 palta aauxa same but yo 3 palta nai different different chaiyo
//             bhane we use props   */}
         
//         </>
//     )
// }

// export default App;


//..........................navbar menu

//...........................
//creating a navbar menu 

// import React from 'react';
// import {Route, Switch, Router} from 'react-router-dom';
// import ReactNavbarMenu from './components/ReactNavbarMenu/NavbarMenu';
// import About from './components/ReactNavbarMenu/About';
// import Contact from './components/ReactNavbarMenu/Contact';
// // import Home from './components/ReactNavbarMenu/Home';
// import Error from './components/ReactNavbarMenu/Error';
// import {BrowserRouter} from 'react-router-dom';


// const App = () =>{ 
//     const Name = () =>{
//         return <h1>Hello, I am a name page</h1>;
//     };


// return (
//     <>
//     <BrowserRouter>
//     <ReactNavbarMenu/>
//         <Switch>
//             <Route exact path='/' component={About}/>
//             <Route exact path='/contact' component={Contact}/>
//             <Route path='/contact/Name' component={Name}/>
//             <Route component={Error}/>
//         </Switch>
//     </BrowserRouter>
//     </>
// )
// }


// export default App;

// ......................................
///////////////////////////////////////
//

// import React,{useState} from 'react';

// const App = ()=> {

  
//   //   useState accepts an initial state and returns two values:
  
//   // The current state.
//   // A function that updates the state.
    
//   //and useState by default value is true
  
//   // const [show,setShow] = useState(true)


//   //.......................
//   // Without using object destructuring
// // const messageState = useState( '' );
// // const message = messageState.state;
// // const setMessage = messageState

// // // Using object destructuring
// // const { state: message, setState: setMessage } = useState( '' );
// // const { state: list, setState: setList } = useState( [] );
//   /////////////////////////////////

//  const[show, setShow] = useState(true)

//    return(
//     <div>
//     {/* if show is true then value lai show garxa if false xa vane dekhauaina

//      */}
//     {show?<h1>Heelo world</h1>:null}
//     {/* <button onClick={()=>{setShow(true)}}>Show</button>
//     <button onClick={()=>{setShow(false)}}>Hide</button> */}
//    {/* for toggle */}
//     <button onClick={()=>{
//       setShow(!show)
//       }
//       }
//       >Toggle</button>
//     </div>
//   )
// }

// export default App;
//
// ...................Sidebar.............................



import React from 'react';
// import Navbar from './components/Sidebar/Navbar';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Home from './Pages/Home';
// import Product from './Pages/Product';

// import UseEffect from './components/ReactHooks/UseEffect';
import Searching from './components/Searching/Searching';

import Categorydata from './components/Categorydata';
import SearchBar from './components/SearchBar/SearchBar';

import Form from './components/FormReact/Form';
const App = () =>{
    return(
        <>

        <Form/>
        {/* <Searching/> */}
        {/* <SearchBar/>
        <Categorydata/> */}

        {/* <UseEffect/> */}

        {/* <BrowserRouter>
            <Navbar/> 
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/product" component={Product}/>
            </Switch>
        </BrowserRouter> */}
        </>
    )
}

export default App;