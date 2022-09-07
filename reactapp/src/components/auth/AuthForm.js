
import React from 'react';
import ReactDOM, { render } from 'react-dom';
const AuthForm = ()=>{
 render.reactDOM(
    <div className="container">
        <div className="main">
            <form>
                <input type="text" name="email"/>
                <input type="text" name="password"/>
                
            </form>
        </div>
    </div>
)
}

export default AuthForm;