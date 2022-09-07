// why redux
//redux kam aata hai app ko state management ko lagi
//The data in react always follows from parent to child component makes it
//unidirectional


//What is redux 
//redux is a pattern and linrary for managing and updating application state
//using event called actions. It serves as a centeralized store for that needs 
//to be use across your entiree application with reules ensuring that the state can
//only be updated in predicatble fashion

//redux main kam garchha state lai manage garna 
//uss state lai manage garnalai  we have one centralized store
//jiske ke under hamro application ko sara state ussi mai store or add rahanchha
//jaba pani app ke application ke under kisi bi component or file
//ko data chahiye rahega toh wo wohase data get garna sakchha
//waha ke data ko update garna sakchha


//course-------------
// 1 Action what to do 
//2 Reducer how to do 
// 3 Store object which hold the state of the application
//4 ess store ke under Functions associated with store 

//REDUX BASIC 
//Action  what to do
//Reducer how to do
//State - current state or updated state

//action - action are plain javascipt objects that have 
//a type field
// action only tell what to do but 
//they don't tell how to do

//like 
/* 
return{
    type:"INCREMENT",
    payload:num
}

//1 Action  - pure object

//there are two actions one increment and anoter decrment

INCREMENT 
when user click on increment button

and DECREMENT
When user click on decrement button

//1.1 action creator  garcha action creator

//eg this is complete action jaha paxi use garyau vane
//it is reusable, portable and easy to use
//incNumber function lai call garchhau

export const incNumber = (num) =>{
    return{
        type:"INCREMENT",
        payload:num
    }
}

//2 reducer
//reducer are function that take the current state and 
//an action as arguments and return a new state result
//example 

const initialState = 0;
const changeTheNumber = (state = initialState, action)=>{
    switch(action.type){
        case "INCREMENT":return state + action.payload;
        case "DECREMENT":return state -1;
        default :return state;
    }
}


// 3 store 
// The redux store birng together the state,
// actions and reducers that make up your app

//it's important to note that you'll only
// have a single store in redux application

//Every redux store has a single root reducer function

//example Store 
import{createStore} from 'redux';
const store = createStore(rootReducers);


//.......................Reduz Principle
//1 Single source of truth - the global state of your application is 
//stored as an objecct inside a single store

//2 state is read-only - The only way to change the state is to dispatch an action

//3 immutability, One way data flow, predictability of outcome
//i.e data change nahi hora hai 

//4 Changes are made with pure reducer function














*/





 
 
