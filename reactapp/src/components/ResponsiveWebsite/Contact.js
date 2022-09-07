import React,{useState} from 'react';

const Contact = () =>{

    // sabai datalai ma yesai under
    //add garna chahanchhu tesai karan ma
    //object use garn chahanchhu
    const [data, setData] = useState({
            fullname:"",
            phone:"",
            email:"",
            msg:""
    });


    // yo InputEvent ma hamilai euta object milchha
    //with the help of event user le je pani lekheko chha teslai access garn asakchhau

    const InputEvent = (event) =>{
        const {name, value} = event.target;
        // for update

        // with the help of this preVal hami  user ka yo tyo actual data
        //jun useState ma xa sabailai access garna sakchhau
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })


    }
    const formSubmit = (e) =>{
        // page lai refresh na garna without data input
        e.preventDefault();
        alert(` My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email}. and Message is ${data.msg}`)


    }
    return(
        <>
        {/* here my-5 top and bottom bata */}
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>

        </div>
        <div className="container-fluid contact_div">
        {/* contact lai responsive ra perfectly center ma lana lai */}
            <div className='row'>
            {/* total 12 col hunxa intead of 12 we give 6 and mobile ma 
            completeley 10 col lele max-auto means hamera center ma dekhaide*/}
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" 
                        class="form-label">Full Name</label>
                        <input type="tex" class="form-control"
                         id="exampleFormControlInput1" 
                        name="fullname"
                        value={data.fullname}
                        onChange={InputEvent}
                        placeholder="Enter Your Name"/>
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" 
                        class="form-label">Phone</label>
                        <input type="number" class="form-control"
                         id="exampleFormControlInput1" 
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="Mobile Number"/>
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" 
                        class="form-label">Email address</label>
                        <input type="email" class="form-control"
                         id="exampleFormControlInput1" 
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        placeholder="name@example.com"/>
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1"
                        class="form-label">Message</label>
                        <textarea class="form-control" 
                        id="exampleFormControlTextarea1"
                         rows="3"
                         name="msg"
                         value={data.msg}
                         onChange={InputEvent}
                         
                         ></textarea>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit</button>

                        </div>
                    </form>

                </div>

            </div>
        </div>
        </>
    )
}

export default Contact;
