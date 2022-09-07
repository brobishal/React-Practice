// useEffect why we use
//jaba pani aap ka render function ek bar
//call ho jayega na taba render function
//call vaye paxi k garne ho aap ko component lai
//batauna ko lagi we use useEffect

//everytime render method call hunxa taba useEffect call hunxa nai
//in react js hook class component ke sath kam gardaina
//yedi hook use garne ho vane functional component nai use garnu parcha
//and functional component ko top ma hooks ko define garnu parchha

import React ,{useState, useEffect} from 'react';
const UseEffect = () =>{

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);


// useEffect ka kam yo hoki adi kunai kam garisakeko xau vane
//yedi tespaxi pani kunai kam garna baki rahyo vane

// useEffect always accept a fucntion
//app ke page or componet ma render method call hunxa  taba yo
//calchha
// render method jaba jaba call hunxa useEffect auto call hunax
//first time page refresh huda yo auto call hunxa

// jaba useEffect ma empty array dinchhau it means now yo useEffect taba matra
//chalchha first time page ko refresh garchhau taba matra chalchha
//uske bat chaldaina

// useEffect(()=>{
//     alert("i am clicked");
// },[]);

// aba button ko click garda matra dekhe
useEffect(()=>{
    alert("i am clicked");
},[num]);


    return(
        <>
            <h1>Hello use Effect</h1>
            <button onClick={()=>{ 
                setNum(num+1)
                }}
                >click Me {num}</button>
                <br/>

                <button onClick={()=>{ 
                setNums(nums-1)
                }}
                >click Me {nums}</button>

        </>
    )
}

export default UseEffect;
