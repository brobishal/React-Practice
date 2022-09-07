import React, {useState} from 'react';


const Catedata = () =>{
    const [userinfo, setUserInfo] = useState({ 
        languages:[], 
        response:[]
    })

    const handleChange = (e) =>{
        // destructuring
        const {value,checked}= e.target; 
        const {languages} = userinfo;

        console.log(`${value} is ${checked}`);

        // case 1: the user checks the box

        if(checked){
            setUserInfo({ 
                languages:[...languages, value],
                response:[...languages, value],
            });
        }

        // case 2: the user unchecks the box

        else{
            setUserInfo({
                languages : languages.filter((val)=> val !==value),
                response: languages.filter((val) => val !==value),
            })
            
        }
        }
    

    return(
        <>
                <div className="main_category">
                    <div className="main_data">
                        <form>
                            <input 
                            className="form_check_input"
                            type="checkbox"
                            value="5000-10000"
                            // id="flexCheckDefault"  
                            onChange={handleChange}  
                            />

                            <label
                            className='form_check_label'
                            // htmlFor="flexCheckDefault"
                            >
                                5000-10000
                            </label>

                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="languages"
                            value="Python"
                            id="flexCheckDefault"
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            python
                        </label>

                        <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Java"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Java
                  </label>

                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="PHP"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      PHP
                  </label>


                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C#"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      C#
                  </label>


                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Typescript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Typescript
                  </label>

                  <label htmlFor="exampleFormControlTextare1">

                  You're proficient in the following languages :{" "}

                  </label>

                  <textarea
                  className='form-control text'
                  name="response"
                  value={userinfo.response}
                  placeholder="he checkbox values will be displayed here"
                  id="floatingTextare2"
                  style={{height:"150px"}}
                  onChange={handleChange}
                  >

                  </textarea>






                        </form>

                    </div>

                </div>
        </>
    )

    }

export default Catedata;