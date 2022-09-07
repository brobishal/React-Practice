import React from 'react';
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () =>{
    return(
        <>
        <BrowserRouter>
        <Navbar/>

            <Switch>
                {/* switch multiple page ma koi ek hi page dekhai de jun sab vanda pahila match hunxa vanna ko lagi */}

                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/service" component={Service}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/"/>
                <Home/>
            </Switch>
            <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;
