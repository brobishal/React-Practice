

// use effect hook lets you perform side effect in function component


// side effect like jaba hami kunai dabai khanchhau vane tesko side effect hunxa

// but react ma yo side effect means worng nai  

// sideeffect are basically anything that affects something 
// Out side of the scipe of the current funciton that being executed.

// means agar aap kuch bi work karte ho toh app ke component ma jo bi kam hora hai 
// Usko xodke component ke bahar or component ke outside jo kuch bu kam aap ko karna raha
// tab aap use effect ko use karoge usko hum bolte hai side effect

// help of useEffect we can use 

// 1) Api request to our backend services
// 2) callt o our authentication service
// // 3) Error tracking call to centry

import React, {useEffect,useState} from 'react';

const UseEffect = () =>{

    const [count, setCount] = useState(0);


    //jab first time page ko load garchhau
    //taba use effect hook auto load hunxa
  useEffect(()=>{
      console.log("hello use effect");

    });
    console.log("hello outside effect");

    return(
    <div>
    {/* jab first time page load hoga tab automatic useEffect call hunxa */}
        <h1>{count}</h1>
        <button onClick={
            ()=>{
                setCount(count+1);
            }

        }>click</button>
    </div>
    )
}

export default UseEffect;
