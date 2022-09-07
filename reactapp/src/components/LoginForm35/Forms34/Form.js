import React, {useState} from 'react';
import './Style.css';

/*if react component app ko form ko control kar raha hai toh 
control component and else dom ko time ma control karha hai toh uncontrol component
  */

// control component - An input form element whose valye is controlled
//by react in this way is called a controlled component./

// form ko input ma kuch na lekh pa raha hu ekso two upaya hai ek default - defaultValue=""/ karna hai and another
// value keyword use nai na kar raha hu toh lekhna sakchhau
const Form = () =>{

    //jaba pani onChange ko function triggred garchau taba function ko call hora hota hai toh
    //yo ek object pass garcha us object ko yaha access garna sakchhau
    
    const [val, SetVal] = useState();
    const [fullName, setFullName] = useState();

    const showData = () =>{
        setFullName(val);
    }
  
    const inputEvent = (event) =>{
        // aba yaha user jo bi yaha pe type kar rhaha hai yaha hum object mai pass kar rahe hai and with the help of
        // event.traget.value usko access kar paaunga
    
        let changeVal= event.target.value;
        SetVal(changeVal);
    }
   return(
       <>
           <div className="container">
            <div className="main">
                <h1>Hello, {fullName}</h1>
                
                <form>
                    <input type="text" name="name" placeholder="Enter your name"
                      onChange={inputEvent}
                        value={val}
                      />
                    <br/>
                    <input type="submit" name="submit" onClick={showData}/>
                    
                </form>

            </div>

           </div>
       </>
   )
}

export default Form;