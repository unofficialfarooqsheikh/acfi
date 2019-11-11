import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Bulk from './Bulk/Bulk';
import PayrollType from './PayrollType/PayrollType';

class Payroll extends Component{

render(){
    return(
     
          <div>
                <Route path='/mainPage/Payroll' exact component={PayrollType} />    
                <Route path='/mainPage/Payroll/Bulk' exact component={Bulk} />
          </div>
    );
};
    


}

export default Payroll;