import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom'
import classes from './buttons.module.css';

 /*import Payslips from './Payslips'*/



class LogsSelector extends Component {

    componentDidMount(){
        // console.log(this.props);
    }
render(props){
    return( 
        <div>
            <div className={classes.flexContainer} >
            <div><Link to={{pathname: this.props.match.url+'/PayrollRows'}}><Button variant="contained" size="large" color="secondary" className={classes.buttoncolour} > Payroll</Button></Link></div>
            <div><Link to={{pathname: this.props.match.url+'/PF' }}><Button variant="contained" size="large" color="primary" className={classes.buttoncolour} > PF</Button></Link></div>
            <div><Link to={{pathname: this.props.match.url+'/BankUploads'}} ><Button variant="contained" size="large" color="primary" className={classes.buttoncolour} > Bank Upload</Button></Link></div>
            <div><Link to={{pathname: this.props.match.url+'/TDS' }}><Button variant="contained" size="large" color="primary" className={classes.buttoncolour}> TDS</Button></Link></div>
            </div>
        </div>
        

    );
}


}

export default LogsSelector;