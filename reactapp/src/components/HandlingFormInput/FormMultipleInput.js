import React, {useState} from 'react';

const FormMultipleInput = () =>{
    // use state ma object pani pass garna sakchhau ra function pani call garna sakcau

    //hamro yo useState object return garchha
    //here name is current data and right side of useState is initial data
    const [fullname, setFullName] = useState({ fname:'',lname:''});

    // for submit fomr ko lagi
    const SubmitForm = (e) =>{
        e.preventDefault();
        alert("hello");
    }

// for input fields ko lagi
const HandleChange = (e) =>{ 
    const value=e.target.value;
    const name =e.target.name;
    setFullName({...fullname,[name]:value})
    console.log(fullname);
    // setName((preValue)=>{
    //     // console.log(preValue);
    //     if(name === 'fname'){
    //         return{
    //         fname:value,
    //         lname:preValue.lname,
    //         }

    //     }else if(name==='lname'){
    //         return{
    //         fname:preValue.fname,
    //         lname:value,


    //         }

    //     }

        
          
    // })

}


    return(
        <>
            <div className="main_div">
                <form onSubmit={SubmitForm}>
                <div>
                    {/* <h1>Hello {name.fname} and {name.lname}</h1> */}
                </div>
                    <input type="text" name="fname" placeholder="Enter your name" 
                    onChange={HandleChange}
                    value={fullname.fname}    
                    />
                    <br/>
                    <input type="text" name="lname" placeholder="Enter your last name"
                    onChange={HandleChange}
                    value={fullname.lname}

                    />
                    <br/>
                    <input type="submit" name="submit" value="Submit"/>

                </form>

            </div>
        </>
    )
}

export default FormMultipleInput;
