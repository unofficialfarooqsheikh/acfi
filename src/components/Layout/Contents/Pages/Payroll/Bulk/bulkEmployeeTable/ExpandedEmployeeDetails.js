import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
import classes from './BulkEmployee.module.css'
import Form from 'react-bootstrap/Form';
// import FormCheck from 'react-bootstrap/FormCheck';
import InputSwitch from '../../../../../../UI/Input/InputSwitch'


const Tr =(props)=>{
    return <tr >
            <td >{props.label}</td>
            <td ><input disabled defaultValue={props.data} style={props.style}></input></td>
            </tr>
}

const BasicInput = (props) =>{
    
   return(

    <div>
        <span><label forhtml='input'>{props.label}</label></span> 
        <span className={classes.input}><input label='input' defaultValue={props.value} disabled={props.disabled} /></span>
    </div>
    ); 


}
const ExpandedEmployeeDetails = (props) =>{
    const [edit, setEdit] = useState(true);
    console.log({edit})
    return(
      
       <div >
            
            <div className={classes.DetailsDiv}>
                
                    <div >
                        <BasicInput label='Employee Number' disabled={edit} value={props.employeeNumber}/>
                        <BasicInput label='Total Number Of Days' disabled={edit} value={0}/> 
                        <BasicInput label='Employee Name' disabled={edit} value={props.employeeName}/> 
                        <BasicInput label='Number of LOP days' disabled={edit} value={3}/> 
                        <BasicInput label='Designation' disabled={edit} value='Analyst'/> 
                        <BasicInput label='Payable Days' disabled={edit} value={5}/> 
                    </div>
                    <Button variant="primary" onClick={() =>{setEdit(!edit);
                            console.log({edit});
                        }}>Edit</Button>
            </div>

            <div className={classes.Employee}>
                
                <div >
                    
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
                                        <Tr style={{visibility:'hidden'}}/>
                                        <Tr style={{visibility:'hidden'}}/>
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
                                    <th>
                                    <InputSwitch />
                                    </th>
                                    </tr>
                                    <tr>
                                    <th>
                                        <input type='checkbox' defaultChecked/><label htmlFor={props.id}>Arrears</label></th>
                                    </tr>
                            </thead>
                        </table>
                    </div>
                    
            </div>
       </div>
     
    );
    
}
export default ExpandedEmployeeDetails;