import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Post from './Post';
import Dashboard from './Dashboard';
import Services from './Services';
import UseParams from '../UseParams/UseParams';
import SearchFilter from '../LiveSearchFilter/SearchFilter';
import Error from './Error';



// BrowserRouter lai nai router vanxa react ma
 
const ReactRouter = () =>{
    let isLogged = true;
    return(
        <>
        {/* BrowerRouter ko bahira hunu vayena */}
        
        <BrowserRouter>
        <Navigation/>
        {/* switch kya karega jab match hojayega toh search 
        or look garna xoddinchha*/}
        <Switch>
        {/* <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the 
        location renders inclusively. Consider these routes: */}
        {/* here component is for render */}
        {/* exact yo path ho toh yo matra render ya or dekhna ko lagi we us exact */}
        {/* jun path ma click gareko xa tyo matra dekhna ko lagi */}
        <Route exact path="/" component={Home}/>

        {/* yesari ni call garna sakchhau ra yesma props pass garna sakchhau*/}
        <Route exact path="/about" component={()=><About name="About"/>} />
        {/* <Route exact path="/contact" component={Contact}/> */}
        {/* <Route exact path="/post/mobile" component={Post}/> */}
        {/* hamro yo mobile dynamic hunxa static navayera
        yesma mobile or laptop jun huda ni dekhaucha tesko lagi 
        we use : (colon) with category like :category */}
        <Route exact path="/post/:category" component={Post}/>


        {/* if error 404 page lai implement garna hami simply euta root banauna parchha
        ra tyo root ma kei pani path na lakhne */}
        {/* hami kunai path dinchhau if avaailable xaina vane
        testo case ma yo component lai render garchha and error page lai sabavanda last ma lekhncu parchha
        */}

        <Route exact path="/post/:category/:id" component={Post}/>

        {/* <Route exact path="/contact" component={Contact}/> */}
        {/* another way */}


        {/* <Route exact path="/contact">
        {/* yes ko benifit yo hoki yesma hami props pass
         garna sakchhau

         for passing props ko lagi there are two method we pass props
        */}
            {/* <Contact company_name=" Lyrical sansar"/>

        </Route> */} 

{/* .............................. */}
        {/* using render function */}
{/* it is self closing hunxa ra exact path hunxa bas yesma component matra hudaina 
yesko satto render lekhchhau */}
        <Route exact path="/contact" render={()=> 
         <Contact company_name=" Lyrical sansar" />} />


         {/* for redirection when hit the login */}

         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/login">
            {isLogged ? <Redirect to="/dashboard"/>:<Home/>}

         </Route>

{/* her we use render method instead of component */}
{/* root ko through bata props ko pass karna hai toh we use
render use garchhau kinki render bar bar kar gardaina
jo hai already usakai show garchha khali jati pani update
garnu parhhc usko matra update garchha
 */}
         <Route exact path="/services" render={()=><Services name="Service"/>}/>

{/* here :name lai nai paramaeters vanchhau
//hami ek extra parameter add gari rachhau
//taki bad me dynamically fetch garna sakchau

 */}
 {/* another one parameter */}
        <Route exact path="/useparams/:name/:lname" component={UseParams} />

        <Route exact path="/searchfilter" component={SearchFilter}/>

        {/* error page dekhaune ho vane path dini nai haina simply path
        ko skip garne ho direct component*/}
        {/* <Route component={Error}/> */}

{/* .................................................................. */}
        {/* for redirect  yesma pani koi path nai dena hai only to lekhne
        */}
        {/* it means koi bi page hamro website ma exist gardaina
        vane typ hamrp web[age ko homepage redicre hunxa*/}
        <Redirect to="/"/>
        </Switch>

        </BrowserRouter>
        
        </>
    )
}

export default ReactRouter;