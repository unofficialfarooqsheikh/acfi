import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom' ;

const SecureRoute = ({component: Component, ...rest }) =>{
    return (<Route {...rest}
        render={
            (props) =>{
                // console.log(props)
                // if(sessionStorage.getItem('Token')){ //unComment for working login check
                if(true){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to={{
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                        }} />
                }
            }
        }

    />);

}
export default withRouter(SecureRoute)