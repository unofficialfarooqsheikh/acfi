import React, {Component} from 'react';
// import axios from 'axios';
import {Route} from 'react-router-dom';
import Bulk from './Bulk/Bulk';
import PayrollType from './PayrollType/PayrollType';

class Payroll extends Component{

      componentDidMount(){
            //here the data from dummy API and storing in the data by splicing it from API
            // axios.get('http://192.168.2.155:8080/')
            // .then(response =>{
            //     console.log(response);}
            // )
            // .catch(error => {
            //           console.log(error);
              
            //       });
      }
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