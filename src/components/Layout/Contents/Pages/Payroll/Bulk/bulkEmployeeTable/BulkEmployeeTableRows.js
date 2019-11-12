import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'

const BulkEmployeeTableRows =(props) => {

    return(

      
 
            <tr>
            <td><InputGroup.Checkbox /></td>
            <td>{props.index}</td>
            <td>{props.id}</td>
            <td>{props.employeeName}</td>
            <td>{props.employeeSalary}</td>
            </tr>
       
    );

}

export default BulkEmployeeTableRows;
      
