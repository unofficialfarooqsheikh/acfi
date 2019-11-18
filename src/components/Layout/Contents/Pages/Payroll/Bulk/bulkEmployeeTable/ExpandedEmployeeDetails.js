import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
import classes from './BulkEmployee.module.css'
import FormCheck from 'react-bootstrap/FormCheck';



const Tr =(props)=>{
    return <tr>
            <td>{props.label}</td>
            <td><input disabled defaultValue={props.data}></input></td>
            </tr>
}

const BasicInput = (props) =>{
    
   return(

    <tr>
        <td>{props.label}</td> 
        <td><input defaultValue={props.value} disabled={props.disabled}/></td>
    </tr>
    ); 


}
const ExpandedEmployeeDetails = (props) =>{
    const [edit, setEdit] = useState(false);
    console.log({edit})
    return(
      
       <div className={classes.Employee}>
            
            <div>
                <table>
                <tbody> 
                    <BasicInput label='Employee Number' disabled={edit} value={props.employeeNumber}/>
                    <BasicInput label='Total Number Of Days' disabled={edit} value={0}/> 
                    <BasicInput label='Employee Name' disabled={edit} value={props.employeeName}/> 
                    <BasicInput label='Number of LOP days' disabled={edit} value={3}/> 
                    <BasicInput label='Designation' disabled={edit} value='Analyst'/> 
                    <BasicInput label='Payable Days' disabled={edit} value={5}/> 
                </tbody>
                </table>
            <Button variant="primary" onClick={() => setEdit(!{edit})}>Edit</Button>
            </div>

            
            <div>
                
                    <table   >
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
                    </table>
            </div>
               <div>
                    <table  >
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
                    </table>
               </div>
                <div>
                    <table  >
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
                    </table>
                </div>
                
       </div>
     
    );
    
}
export default ExpandedEmployeeDetails;