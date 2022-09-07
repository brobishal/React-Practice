import React, { useState } from 'react';
import './Style.css';
const ReactHook = () =>{

    let time = new Date().toLocaleTimeString();
    const[date, setDate] = useState(time);

    const DateShow  = () =>{
        time = new Date().toLocaleTimeString();
        setDate(time);


    }

    return(
        <>
            <div className="container">
                <div class="main">
                    <div className="mid">
                        <h1>{date}</h1>
                        <button onClick={DateShow}>Get Time</button>

                    </div>
                     
                </div>

            </div>

        </>
    )
}

export default ReactHook;
