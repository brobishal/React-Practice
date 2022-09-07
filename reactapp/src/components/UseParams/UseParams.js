import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

// useParams return an object of key/value pairs of URL parameter
//Use it to access match. Params of the cuurent <Route>

// UseParams 0  



// hamilai kei pata chalega user le top ma k lekheko xa
// user le ke lekheko xhha tyo thapaunako lagi fetch garnu parcha

// yaha match parameter pass garnu parcha
//this is another way........................

// const UseParams = ({match}) => {
//   return (
//     <>
//         <h1>Welcome to use Params {match.params.name} </h1>
//     </>
//   )
// }

// this is another ways to do......................

const UseParams = () => {

  const {name, lname} = useParams();

  
  // for useLocation
  // useLocation hook return the location
  // object that represent the current URL. 
  
  //location ko help bata current path ko patta lagauna sakchhau

  // useLocation komostly use to find out the current URL Path

  const location = useLocation();
  const history = useHistory();
  console.log(history);

  return (
    <>
        <h1>Welcome to use Params {name} {lname} </h1>
        <p>my current location is {location.pathname}</p>

        {/* adi useparam paxi koi aru nam bishal lekhxaa 
        vane ya or naam bishal hunxa vane malai euta button dekhaune ho
        else nai dekhaune
        */}

{/* yadi pathname equals hunxa vane button dekhau natra nai  

yo testo la use hunxa when VIP Pass or premium user ko 
lagi buttun dekhauna and normal user ko lagi nai dekhauna
*/}
        {location.pathname === `/useparams/bishal/shrestha` ? 
        <button onClick={()=> 

        history.push('/')}>homepage</button>
         : null }
         {/* insated of go back we can use push also
         with the help of push we can also forward to root
         
         */}

         {/* 
         Object
action: "PUSH"
block: ƒ block(prompt)
createHref: ƒ createHref(location)
go: ƒ go(n)
goBack: ƒ goBack()
goForward: ƒ goForward()
length: 14
listen: ƒ listen(listener)
location: {pathname: '/', search: '', hash: '', state: undefined, key: 'coaou3'}
push: ƒ push(path, state)
replace: ƒ replace(path, state)
[[Prototype]]: Object */}
        

    </>
  )
}

export default UseParams
