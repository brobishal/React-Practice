import React from 'react';
import web from '../../../src/Images/web.jpg';
import {NavLink} from 'react-router-dom';

// so common tyo property or pros lai paauna ko lagi
//we pass props

const Common = (props) =>{
    return(
        <>
        {/* section is available in html 5 */}
            <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto"> 
                            <div className="row">
                                {/* we use grid sustem */}
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}
                                     <strong className="brand-name">Bishal Shrestha</strong></h1>
                                    <h2 className="my-3">
                                        We are th team of talented developer making website
                                    </h2>
                                    <div className="mt-3">
                                         <NavLink to={props.visit} className="btn btn-get-started">{props.btnname}</NavLink>  
                                          
                                    </div>
    
                                </div>

                                {/* another div */}
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} 
                                    className="img-fluid animated"
                                     alt="home img"/>

                                </div>
                            </div>
                            </div>


                        </div>

                    </div>
            </section>
        </>
    )
}

export default Common;
