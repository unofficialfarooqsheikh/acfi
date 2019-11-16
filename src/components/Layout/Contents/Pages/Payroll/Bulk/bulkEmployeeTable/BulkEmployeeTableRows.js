import React, {useState} from 'react';
import classes from '../Bulk.module.css';
import ExpandedEmployeeDetails from './ExpandedEmployeeDetails';

const BulkEmployeeTableRows =(props) => {
    // console.log(props.checkedState)
        const [show,setShow] =useState(false);
        const ExpandHandler =() =>{
                setShow(!show); 
        }
    return(
        
      
        <tbody >
                <tr onClick={ExpandHandler} className={classes.BulkEmployeeTable}>
                <td>{props.sno}</td>
                <td>{props.id}</td>
                <td>{props.employeeName}</td>
                <td>{props.employeeSalary}</td>
                <td>
                        
                        <input type='checkbox' 
                        id={props.id}
                        onChange={props.change} 
                        checked={props.checkedState}  
                        />
                            <label htmlFor={props.id}>Select</label>
                    </td>  
            </tr>
            { show ? <ExpandedEmployeeDetails /> :null}
        </tbody>
            
                
    );

}

export default BulkEmployeeTableRows;
      
