import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router,Link,Route, Redirect} from 'react-router-dom'
import classes from './buttons.module.css';

 /*import Payslips from './Payslips'*/



class Logs extends Component {
render(){
    return( 
        <div>
            <div className={classes.flexContainer} >
           
            <div><Link to={{
                pathname: '/mainPage/Logs/PayrollRows'
            }} ><Button variant="contained" size="large" color="secondary" className={classes.buttoncolour} > Payroll</Button></Link></div>
            <div><Link to='/mainPage/Logs/PF' ><Button variant="contained" size="large" color="primary" className={classes.buttoncolour} > PF</Button></Link></div>
            <div><Link to='/mainPage/Logs/BankUploads' ><Button variant="contained" size="large" color="primary" className={classes.buttoncolour} > Bank Upload</Button></Link></div>
            <div><Link to='/mainPage/Logs/TDS' ><Button variant="contained" size="large" color="primary" className={classes.buttoncolour}> TDS</Button></Link></div>
            </div>
        </div>
        

    );
}


}

export default Logs;