import React from 'react';
import classes from '../Bulk.module.css';
import InputSwitch from '../../../../../../UI/Input/InputSwitch';

const BulkEmployeeTableRows =(props) => {
//    console.log(props)
    return(
        
            <React.Fragment>
                
                    <tr  className={classes.BulkEmployeeTable}>
                         
                            <td >{props.sno}</td>
                            <td onClick={props.ExpandHandler}>{props.employeeData.id}</td>
                            <td onClick={props.ExpandHandler}>{props.employeeData.employee_name}</td>
                            <td onClick={props.ExpandHandler}>{"₹"+props.employeeData.employee_salary}</td>
                            <td onClick={props.ExpandHandler}>{props.employeeData.LOP}</td>
                            <td onClick={props.ExpandHandler}>{"₹"+props.employeeData.CurrentGrossafterLOP}</td>
                            <td onClick={props.ExpandHandler}>{"₹"+props.employeeData.OtherAllowance}</td>
                            <td onClick={props.ExpandHandler}>{"₹"+props.employeeData.TotalDeductions}</td>
                            <td onClick={props.ExpandHandler}>{"₹"+props.employeeData.NetPay}</td>
                            <td >
                
                                    {/* <input type='checkbox' 
                                    id={props.id}
                                    onChange={props.change} 
                                    checked={props.checkedState}  
                                    />
                                        <label htmlFor={props.id}>Select</label> */}
                                <InputSwitch id={props.id} change={props.change} checkedState={props.checkedState} label='Select'/>
                                </td>  
                    </tr>
            </React.Fragment>
            
            
                
    );

}

export default BulkEmployeeTableRows;
      
