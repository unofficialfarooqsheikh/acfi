import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
import classes from './PayrollType.module.css';
import {Redirect} from 'react-router-dom';


const PayrollType = () => {
    const [uploaded,
        setUploaded] = useState(false);
    const [uploadedFileName,setUploadedFileName] = useState(null);
    const handleChange = (e) => {
        console.log(e[0].name);
        setTimeout(() => {
            setUploaded(true);
        }, 6000);
        setUploadedFileName(e[0].name);
    }
    console.log(uploaded,uploadedFileName)
    let buttonType = "primary";
    
    return (
        
        <div className={classes.PayrollTypeSelectorBackground}>
            <div className={classes.PayrollTypeSelectorBox}>
                <div>
                    <p>Please Upload the L.O.P File</p>

                    <div className={classes.PayrollTypeSelectorButtons}>
                        <input type="file" onChange={(e) => handleChange(e.target.files)}/>
                        { uploaded ?<Redirect to='/mainPage/Payroll/Bulk'/>: <p>File Uploaded {uploadedFileName}</p>}
                    </div>
                    
                </div>
            </div>
        </div>
    );

};

export default PayrollType