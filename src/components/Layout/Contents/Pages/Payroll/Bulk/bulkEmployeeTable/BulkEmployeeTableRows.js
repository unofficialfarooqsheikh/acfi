import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import { resolvePreset } from '@babel/core';

const BulkEmployeeTableRows =(props) => {
    // console.log(props.checkedState)
    return(

      
 
            <tr >
            
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
       
    );

}

export default BulkEmployeeTableRows;
      
