import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FormCheck from 'react-bootstrap/FormCheck';
import classes from '../Bulk.module.css';


const Tr =(props)=>{
    return <tr>
            <td>{props.label}</td>
            <td><input disabled defaultValue={props.data}></input></td>
            </tr>
}
const BasicInput = (props) =>{

   return(

    <tbody>
        <label htmlFor={props.label}>{props.label}</label> 
        <input name={props.label} id="favorite-animal" defaultValue={props.value}/>
    </tbody>
    ); 


}
const ExpandedEmployeeDetails = (props) =>{

    return(
       <tbody className={classes.ExpandedEmployeeDetails}>
            
            <tbody> 
                <BasicInput label='Employee Number' placeHolder='' value={0}/>
                <BasicInput label='Total Number Of Days' placeHolder='' value={1}/> 
                <BasicInput label='Employee Name' placeHolder='' value={2}/> 
                <BasicInput label='Number of LOP days' placeHolder='' value={3}/> 
                <BasicInput label='Designation' placeHolder='' value={4}/> 
                <BasicInput label='Payable Days' placeHolder='' value={5}/> 
            </tbody>
            <Button variant="primary">Edit</Button>
            
                <Table striped bordered hover size="sm"  >
                            <thead>
                            <tr>
                            <th>Earning Component</th>
                            <th>Amount</th>
                            </tr>
                            </thead> 
                            <tbody>
                                <Tr label='Basic Pay' data={0}/>
                                <Tr label='House Rent Allowance' data={1}/>
                                <Tr label='Conveyance Allowance' data={2}/>
                                <Tr label='Medical Allowance' data={3}/>
                                <Tr label='Leave Travel Allowance' data={4}/>
                                <Tr label='Other Allowances' data={5}/>
                                <Tr label='Total Earnings' data={6}/>
                            </tbody>
                </Table>
                <Table striped bordered hover size="sm"  >
                            <thead>
                            <tr>
                            <th>Deduction Component</th>
                            <th>Label</th>
                            </tr>
                            </thead> 
                            <tbody>
                                <Tr label='PF Employer Contribution' data={7}/>
                                <Tr label='PF Employer Contribution' data={8}/>
                                <Tr label='Professional Tax' data={9}/>
                                <Tr label='Income tax' data={10}/>
                                <Tr/>
                                <Tr/>
                                <Tr label='Total Deductions' data={11}/>
                            </tbody>
                </Table>
                <Table striped bordered hover size="sm"  >
                    <thead>
                            <tr>
                            <th> Additional Components</th>
                            </tr>
                            <tr>
                            <th><FormCheck 
                                type="switch"
                                label="Bonus"
                            /></th>
                            </tr>
                            <tr>
                            <th><FormCheck 
                                type="switch"
                                label="Arrears"
                            /></th>
                            </tr>
                    </thead>
                </Table>
                
       </tbody>
     
    );
    
}
export default ExpandedEmployeeDetails;