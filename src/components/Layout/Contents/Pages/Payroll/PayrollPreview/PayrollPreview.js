import React, {Component} from 'react';
import classes from './payrollPreview.module.css'
const PayrollPreview= (props)=>{

    let data = props.data
    
    let renderPreview = data.map((employee,sno)=>{
        var trClass = classes.general
        if(employee.LOP !== 0){
            console.log("lop")
            trClass = classes.LopDeducted
        }
        else if(employee.Bonus !== 0){
            console.log("bonus Added")
            trClass = classes.BonusAdded
        }
       return( 
        <tr key={sno} className={trClass}>
        {Object.entries(employee).map(([key, value]) => {
            return <td key={key}>{value}</td> 
        })}    
        </tr>
       )
    });
    return(

        <div>
            <div>
                <h1>Payroll Preview - October</h1>
                <div>
                    <span><div className={classes.Square} style={{backgroundColor: "rgb(240, 241, 243)"}}></div>:Bonus Added</span> 
                    <span><div className={classes.Square} style={{backgroundColor: "rgba(198, 239, 206, 1)"}}></div>:LOP Deducted</span> 
                    <span><div className={classes.Square} style={{backgroundColor: "rgba(255, 199, 206, 1)"}}></div>:General </span> 
                </div>
            </div>
            <div className={classes.TableContainer}>
                <table className={classes.payrollPreview}>
                    <thead >
                        {
                            <tr>
                            {Object.entries(data[0]).map(([key, value]) => {
                                return <th key={key} className={classes.payrollPreview}>{key}</th> 
                            })}    
                            </tr>
                        }
                    </thead>
                    <tbody>
                        <tr></tr>
                        {renderPreview}
                    </tbody>
                </table>
            </div>
            <div className={classes.buttons}>
                <button>Cancel</button>
                <button>Confirm</button>
            </div>
        </div>
    );
}
export default PayrollPreview