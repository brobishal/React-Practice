// // spred operator



// const fullName =['Bishal','shrestha'];
// //here fullname maine ek array create kar chuka hu
// //and bat aati hai biodata ma bio dataa ma pani wo data 
// //fullname hota hai kya pheri maile 
// //Bishal ra shrestha lekhna parchha ta
// //ya or mere pass ek tarika hai jo maile already lekhi sakeko
// //array xa kiu na mai esspe add kar du, or concatinate 
// //karke add kardu

// //toh kuch esa tarika hai ha hai eslai nai hami 
// //spread operator vanxa

// // for concating 
// //3 bar dot lekhna hai and concatinate with the array name

// //can include or concat garna sakxaxau array lai new array banauda
// const biodata = [1, ...fullName, 26, male];
// console.log(biodata);

// const shooterGames = ['call of duty', 'far city', 'resident evil'];
// const racingGame =  ['need for spped', ' gran turosmo', 'Burnout'];

// //for contacing karna ho to use spread operator

// const games = [...shooterGames, ...racingGame];

// //3rd case
// //desctructuring of the array
// //that means array lai pani chote chote 
// //tukro mai devide ma kardena bad me usko 
// //individually use kar sake
// const [first, ...remaining] = shooterGames;
// console.log(first);
// console.log(remaining);



// const fullMyName = {
//     fname:"bishal",
//     lname:"shrestha"
// }


// const mybiodata = {
//     id:1,
//     ...fullMyName,
//     age:21
// }

// console.log(mybiodata);

import React from 'react';

const SpreadOperator = () =>{

    //making spread operator 
    const fullName = ['bishal','shrestha'];
    // aba maile fullName ko array create gari sakyau
    //ra pheri yeslai lekhna pardai pread operator ke throug
    
    //bio ma ni fullName ta hunxa nai but tesko lagi pheri lekhna pardaina

    //biodata ma data lai add garna
    const biodata = [1,...fullName, 26, "male"];

    const racingGames =['call of duty','Far and fury', 'Nepali car'];
    const shooterGame = ['banderr', 'the name of th eboken'];

    //second secenario
    const games = [...racingGames, ...shooterGame];
    console.log(games);

    // thrid senario with array disctructing - that means array ko bhi aur chhote chhote tukro ma 
    //kardena

    /* 
    Destructuring has made extracting data from an array very simple and readable. Imagine trying to extract data from a nested array with 5 or 6 levels. That would be very tedious. You use an array literal on the left-hand side of the assignment.

var thing = ["Table", "Chair", "Fan"];
var [a, b, c] = thing;
    */
    var [first,...remaining] = racingGames;

    console.log(first);
    console.log(remaining);



    console.log(fullName); 
    console.log(biodata);

    const fullMyName = {
        fname:"Bishal",
        lname:"Shrestha"
    }

    // combining two object
    const mybiodata={
        id:1,
        // spreading operater or concating
        ...fullMyName,
        age:21,
        gender:"male"

    }
    console.log(mybiodata);

    return(

        <>
            <h1>Hello</h1>
        </>
    )
}

export default SpreadOperator;

