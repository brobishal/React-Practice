import React, {useState} from 'react';

const DigitalClock = () =>{

    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    
    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    


    setInterval(UpdateTime,1000)
    return(
        <>
            <h1>{ctime}</h1>
        </>

    )

}

export default DigitalClock;


