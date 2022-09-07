
import React, {Suspance} from 'react';
import {Redirect, Route} from 'react-router-dom';
const PrivateRoute =({component:Component, Layout : Layout, ...rest}) =>{
        return(
            <Route
                {...rest}
                render ={(props)=>{
                        if(!false){
                            return(
                                <Redirect
                                    to={{
                                        pathname:'/login',
                                        state:{from:props.location}


                                    }}
                                />
                            )
                        }
                }}

            />
        );
}

