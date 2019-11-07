import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Payroll.module.css';
import Router, {Link} from 'react-router-dom';

class Payroll extends Component{

render(){
    let buttonType= "primary";
    return(
        <div className={classes.PayrollTypeSelectorBackground}>
            <div className={classes.PayrollTypeSelectorBox}>
                <div> 
                    <p>Which type of payroll do you wish to generate?</p>
                    
                    <div className={classes.PayrollTypeSelectorButtons}>
                        <Button variant={buttonType} style={{margin: '5px'}}>Individual</Button>
                            <Link to={{
                                pathname: '/mainPage/Payroll/Bulk'
                            }}><Button variant={buttonType} style={{margin: '5px'}}>Bulk</Button></Link>
                    </div>
                </div>
            </div>

            {/* <div>
            <Button variant={buttonType} style={{
                                         margin: '5px'
                                    }}
            >Active</Button>
            <Button variant={buttonType} style={{
                                         margin: '5px'
                                    }}
            >Pipeline</Button>
            <Button variant={buttonType} style={{
                                         margin: '5px'
                                    }}
            >Dormant</Button>
            </div> */}
            
            
        </div>
    );
};
    


}

export default Payroll;