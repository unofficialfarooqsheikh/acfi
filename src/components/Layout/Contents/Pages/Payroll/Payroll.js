import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Bulk from './Bulk/Bulk';
import classes from './Payroll.module.css'
import PayrollType from './PayrollType/PayrollType';

class Payroll extends Component{

render(){
    return(
     
          <div className={classes.Payroll}>
                <Route path='/mainPage/Payroll' exact component={PayrollType} />    
                <Route path='/mainPage/Payroll/Bulk' exact component={Bulk} />
          </div>
    );
};
    


}

export default Payroll;