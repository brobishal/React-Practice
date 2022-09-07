import React from 'react';
import './ReactRedux.css';

const ReactRedux = () =>{
    return(
        <>
        <div className='main_container'>
            <div className="main_div">
                <h1>Increment /Descrement counter</h1>
                <p>using react and redux</p>
                <div className="box">
                    <a className="quantity_minus" title="Decrement"><span>-</span></a>
                    <input name="quantity" type="text" class="quantity_input" value="0"/>
                    <a className="quantity_plus" title="increment"><span>+</span></a>

                </div>

            </div>
        </div>

        </>
    )
}

export default ReactRedux;