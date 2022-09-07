import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Bootstrap = () =>{
    return(
        <>

            <div className="container-fluid">
            <h1 className="text-center">Hello Bootstrap</h1>
            <br/>
            </div>
            <div className="text-center">
            <div className="card" style={{width:"18rem"}}>
                <img 
                src="https://picsum.photos/seed/picsum/200/100"
                className="card-img-top"
                alt="iumg"
                
                 />
                <div className="card-body">
                    <h5 className="card-title">card title</h5>
                    <p className="card-text">
                        this is one of the best programming language in 2022

                    </p>
                    <a href="#" className="btn btn-primary">Submit</a>
                </div>



            </div>
            <button className='btn btn-outline-success'>Wlcome to future</button>
            </div>
        </>
    )


}

export default Bootstrap;