import React,{useState} from 'react';
import classes from './BulkEmployee.module.css';
import InputToggle from '../../../../../../UI/Input/InputToggle';
import InputSwitch from '../../../../../../UI/Input/InputSwitch';
import BasicInput from '../../../../../../UI/Input/BasicInput';



const Tr =(props)=>{
    return <tr >
            <td >{props.label}</td>
            <td ><input disabled value={props.data} style={props.style}/></td>
            </tr>
}

const BasicOutput = (props) =>{
    
   return(
    <div className={classes.DataContainer}>
        <span className={classes.DataContainerChild1}>{props.label}</span> 
        <span className={classes.DataContainerChild2}><p>{props.value}</p></span>
    </div>
    ); 
}







const ExpandedEmployeeDetails = (props) =>{
    
    const [edit, setEdit] = useState(true);
    const [bonusSelect, setBonusSelect] = useState(false);
    const [arrearsSelect, setArrearsSelect] = useState(false);
    console.log(arrearsSelect);
    console.log(bonusSelect);
    
    const EditButton = edit?(<button variant="primary" onClick={() =>{setEdit(!edit);
        console.log({edit});
    }}>Edit</button>): null; 
    
    const SaveCancelButton = edit ? null :(
        <div className={classes.editSaveButtons}>
            <button  onClick={() =>{setEdit(!edit);}}>Cancel</button>
            <button  onClick={() =>{setEdit(!edit);}}>Save</button>
        </div>);
        // Conditionally showing the Bonus and arrears contents on toggle 
    const BonusContent = bonusSelect ? 
    <div>
    <div style={{display:'flex',flexDirection:'row',}}>
        <p>Select Bonus</p>
        <InputSwitch label='Event 1 Bonus' checked='true' />
        <InputSwitch label='Event 2 Bonus' />
    </div>
    <BasicInput type='text' label='Bonus Amount' />
    </div>
    : null;
    const ArrearsContent = arrearsSelect ?
     <div>
        <BasicInput type='text' label='Period'/>
        <label htmlFor='Reason'>Reason</label><textarea id="Reason" style={{width:'fitContent'}}/>
        <BasicInput type='text'  label='Arrear Amount'/>
     </div>
     : null;
    return(
      
       <div className={classes.Container} >
            <div className={classes.TablesContainer}>
                <div className={classes.DetailsContainer}>
                        <div className={classes.DetailsDiv} >
                            <div className={classes.DetailsDivChild1}>
                                <BasicOutput label='Employee ID' disabled value={props.employeeData.id}/>
                                <BasicOutput label='Total Number Of Days' disabled value={props.employeeData.TotalNoofdays}/> 
                            </div>
                            <div className={classes.DetailsDivChild1}>
                                <BasicOutput label='Employee Name' disabled value={props.employeeData.employee_name}/> 
                                <BasicOutput label='Number of LOP days' disabled value={props.employeeData.LOP}/> 
                            </div>
                            <div className={classes.DetailsDivChild1}>
                                <BasicOutput label='Designation' disabled value={props.employeeData.Designation}/> 
                                <BasicOutput label='Payable Days' disabled value={props.employeeData.Paiddays}/>
                            </div> 
                        </div>
                </div>
                <div className={classes.DetailsContainer2}>
                    
                    <div className={classes.Employee}>
                        
                        <div>
                                <table>
                                            <thead>
                                            <tr>
                                            <th>Earning Component</th>
                                            <th>Amount</th>
                                            </tr>
                                            </thead> 
                                            <tbody>
                                                <Tr label='Basic Pay' data={"₹"+props.employeeData.BasicPay}/>
                                                <Tr label='House Rent Allowance' data={"₹"+props.employeeData.HRA}/>
                                                <Tr label='Conveyance Allowance' data={"₹"+props.employeeData.Conveyance}/>
                                                <Tr label='Medical Allowance' data={"₹"+props.employeeData.Medical}/>
                                                <Tr label='Leave Travel Allowance' data={"₹"+props.employeeData.LTA}/>
                                                <Tr label='Other Allowances' data={"₹"+props.employeeData.OtherAllowance}/>
                                                <Tr label='Total Earnings' data={"₹"+props.employeeData.GrossAmount}/>
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
                                                <Tr label='PF Employer Contribution' data={"₹"+props.employeeData.PFEmployer}/>
                                                <Tr label='PF Employer Contribution' data={"₹"+props.employeeData.PFEmployee}/>
                                                <Tr label='Professional Tax' data={"₹"+props.employeeData.PT}/>
                                                <Tr label='Income tax' data={"₹"+props.employeeData.PT}/>
                                                <Tr style={{visibility:'hidden'}}/>
                                                <Tr style={{visibility:'hidden'}}/>
                                                <Tr label='Total Deductions' data={"₹"+props.employeeData.TotalDeductions}/>
                                            </tbody>
                                </table>
                           </div>
                    </div>
                    <div className={classes.AdditionalComponents}>
                                <table  style={{border:'none'}}>
                                    <thead>
                                            <tr>
                                            <th> Additional Components</th>
                                            </tr>
                                            <tr>
                                            <th>
                                            <InputToggle id='BonusCheck' label='Bonus'  
                                            change={(e)=>{
                                                // console.log(element.scrollBy(0,1),window.scrollY);
                                                setBonusSelect(!bonusSelect)}} checked={bonusSelect} disabled={edit}/>
                                            {BonusContent}
                                            </th>
                                            </tr>
                                            <tr>
                                            <th>
                                            <InputToggle id='ArrearsCheck' label='Arrears' change={()=>{setArrearsSelect(!arrearsSelect)}}  checked={arrearsSelect} disabled={edit}/>
                                            {ArrearsContent}
                                            </th>
                                            </tr>
                                    </thead>
                                </table>
                                <div >
                                    <p style={{display:'inline',fontWeight:'bold'}}>Net Pay:</p>
                                    <p style={{display:'inline'}}>{"₹"+props.employeeData.NetPay}</p>
                                </div>
                                <div className={classes.buttonsDiv}>
                                    {EditButton}
                                    {SaveCancelButton}
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            
            </div>
            </div>   
                    
       </div>
     
    );
    
}
export default ExpandedEmployeeDetails;