import React, {createContext} from 'react';
import CompA from './CompA';
// hamile context create garyau ra yesko data srif or sirf
//component c ko lai mitra paauows vanera

// context means if parent data pass garna chahega compc ko 
//of bina compA and CompB ko pass gare bina nai tyo garna sakchhau with the
//help of context

const FirstName = createContext();
// anoter data pass to compc

const LastName =createContext();

const App = () =>{
    return(
        <>
        {/* as it is custom component jasatai */}
        {/* aba yo context you need a provider and
         yesko bitch ma component aaunu parcha rakhnu parchha
        */}
            <FirstName.Provider value={"Hari"}>
            <LastName.Provider value={"Shrestha"}>
            <CompA/>    
            </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default App;

export {FirstName, LastName};