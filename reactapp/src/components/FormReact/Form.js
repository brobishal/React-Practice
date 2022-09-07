import React, {useState}from 'react';


const Form = () =>{

    const [name, setName] = useState('');

    const handleChange = (event) =>{
        // value lai eccess garna sakchhau
        console.log(event.target.value);
        setName(event.target.value);
    }
    return(
        <>
            <h1>Form</h1>
            <h1>{name} change</h1>
            <input type="text" 
                placeholder="Enter you name"
                // jaba pani hami onChange ko trigger garchhau
                //and yo jaba function call horaha hota hai toh
                //tab yo ek object ni pass kar raha hota hai
                onChange={handleChange}
            />
        </>
    )
}

export default Form;