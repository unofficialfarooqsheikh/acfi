import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import classes from './ErrorComponent.module.css'

const ErrorComponent=(props) =>{
    let ErrorData= "Connection Error."
    console.log(props);
    return(
        <div className={classes.main}>
    	    <div className={classes.fof}>
        	    <h1>{props.errorMsg}</h1>
                <br/>
            <Button onClick={()=>{props.history.goBack()}}>Retry</Button>
    	    </div>
        </div>
    )
}

export default withRouter(ErrorComponent);