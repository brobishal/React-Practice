// react router #56 tutorial
import React from 'react';

//import
import {Route, Switch} from 'react-router-dom';
import  About from './About';
import Contact from './Contact';
import Error from './Error';


const Router = () =>{

const Name = () =>{
  return <h1>Hello I'am a Name Page</h1>
}
 return(
     <>
{/* 
{/* inside this switch write Route 
it means yo root ma yesto k lekhum ki user hamro
 url page ma jaye ra url mai lekhe about them about componet dekhe
 * /} */}


{/* yaha switch kam sabai vanda pahila wala match kar gaya path usko show karwado */}
     {/* koi ek hi page dekha vanna ko lagi we use switch */}
     {/* but slash diyea other page ko name diyo vane about lai nai dekhauxa yo problem lai 
     fix garna  we use exact property */}
     <Switch>
      <Route exact path='/' component={About} />
      {/* route lekhnai parxa it means rasta*/}
      {/* user forward slash halera contact halcha vane kaha par redirect karwana hai in component ma*/}
      
       {/* after contact paxi name dekhau ho vane we use again exact */}

      <Route exact path='/contact' component={Contact}/>
      <Route path="/contact/Name" component={Name}/>
      {/* error ma page nai xaina so we dont use path attribute
      hami component lai matra render garchhau */}
      <Route component={Error}/>
     </Switch>
       {/* <About/>
       <Contact/> */}
     </> 
    )
     
}

export default Router;  