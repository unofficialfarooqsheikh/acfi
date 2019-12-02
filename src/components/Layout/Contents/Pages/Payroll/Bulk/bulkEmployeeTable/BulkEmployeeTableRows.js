import React from 'react';
import classes from '../Bulk.module.css';
import InputSwitch from '../../../../../../UI/Input/InputSwitch';

const BulkEmployeeTableRows =(props) => {
   
    return(
        
      
        <tbody >
                <tr  className={classes.BulkEmployeeTable}>
                     
                        <td onClick={props.ExpandHandler}>{props.sno}</td>
                        <td onClick={props.ExpandHandler}>{props.id}</td>
                        <td onClick={props.ExpandHandler}>{props.employeeName}</td>
                        <td onClick={props.ExpandHandler}>{props.employeeSalary}</td>
                        
                        <td >
                                
                                {/* <input type='checkbox' 
                                id={props.id}
                                onChange={props.change} 
                                checked={props.checkedState}  
                                />
                                    <label htmlFor={props.id}>Select</label> */}
                            <InputSwitch id={props.id} change={props.change} checkedState={props.checkedState}/>
                            </td>  
                </tr>
            
        </tbody>
            
                
    );

}

export default BulkEmployeeTableRows;
      
