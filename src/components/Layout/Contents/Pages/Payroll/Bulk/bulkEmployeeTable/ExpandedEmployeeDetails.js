import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import classes from './BulkEmployee.module.css';
import InputToggle from '../../../../../../UI/Input/InputToggle';



const Tr =(props)=>{
    return <tr >
            <td >{props.label}</td>
            <td ><input disabled defaultValue={props.data} style={props.style}></input></td>
            </tr>
}

const BasicInput = (props) =>{
    
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
    
    const EditButton = edit?(<Button variant="primary" onClick={() =>{setEdit(!edit);
        console.log({edit});
    }}>Edit</Button>): null; 
    
    const SaveCancelButton = edit ? null :(
        <div className={classes.editSaveButtons}>
            <Button variant="primary" onClick={() =>{setEdit(!edit);}}>Cancel</Button>
            <Button variant="primary" onClick={() =>{setEdit(!edit);}}>Save</Button>
        </div>);
    const BonusContent = bonusSelect ? <div><p>Bonus</p></div>: null;
    const ArrearsContent = arrearsSelect ? <div><p>Arrears</p></div>: null;
    return(
      
       <div className={classes.Container} >
            <div className={classes.DetailsContainer}>
                    <div className={classes.DetailsDiv} >
                        <div className={classes.DetailsDivChild1}>
                            <BasicInput label='Employee Number' disabled value={props.employeeNumber}/>
                            <BasicInput label='Total Number Of Days' disabled value={0}/> 
                        </div>
                        <div className={classes.DetailsDivChild1}>
                            <BasicInput label='Employee Name' disabled value={props.employeeName}/> 
                            <BasicInput label='Number of LOP days' disabled value={3}/> 
                        </div>
                        <div className={classes.DetailsDivChild1}>
                            <BasicInput label='Designation' disabled value='Analyst'/> 
                            <BasicInput label='Payable Days' disabled value={5}/>
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
                </div>
                <div className={classes.AdditionalComponents}>
                            <table  >
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
                        </div>
                    <div className={classes.buttonsDiv}>
                            {EditButton}
                        {SaveCancelButton}
                    </div>
            </div>   
       </div>
     
    );
    
}
export default ExpandedEmployeeDetails;