import React from 'react'
import {Route,Redirect} from 'react-router-dom';

const ProtectedRoute= ({component: Component, ...rest }) =>{

    const Auth ={
        isAuthenticated: false
    };

   console.log("ProtectedRoute.js",rest); 
    return(
        <Route {...rest} render={(props) => (
            Auth.isAuthenticated
            ? 
            <Component {...props}/>
            : <Redirect to={{
                pathname: '/'
            }} />
            
    )} />)

}

export default ProtectedRoute;