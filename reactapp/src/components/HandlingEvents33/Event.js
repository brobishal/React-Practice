import React, {useState} from 'react';
import './Style.css';
const Event = () =>{

    const red = "red";
    let text = "Click Me";

    //use state use garda top pe functional component ke under use garne ho
    const [bg, setBg] = useState(red);
    const [name, setName] = useState(text);



    const bgChange = () =>{
        let newBg = "green";
        setBg(newBg);
        let newText = " Well Paly";
        setName(newText);
         

        // setColor({backgroundColor:"gray"});

    }

    const bgBack = () =>{
        let newBg = "red";
        setBg(newBg);
        let newText = " Click Me";
        setName(newText);
    }
    return(
        <>
            <div className="container" style={{backgroundColor:bg}} >
                <div className="main">
                {/* react must be camel case */}
                <button onClick={bgChange} onDoubleClick={bgBack}>  {name}</button>
                </div>
            </div>

        </>
    );
};

export default Event;