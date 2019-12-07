import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
import classes from './PayrollType.module.css';
import {Redirect} from 'react-router-dom';


const PayrollType = () => {
    const [uploaded,
        setUploaded] = useState(false);
    const [uploadedFileName,setUploadedFileName] = useState('None');
    const handleChange = (e) => {
        console.log(e[0].name);
        setTimeout(() => {
            setUploaded(true);
        }, 2000);
        setUploadedFileName(e[0].name);
    }
    console.log(uploaded,uploadedFileName)
    
    return (
        
        <div className={classes.LOPUploadBackground}>
            <div className={classes.LOPUploadSelectorBox}>
                <div>
                    <p className={classes.LOPUploadHeading}>Please Upload the L.O.P File</p>

                    <div className={classes.LOPUploadSelectorButtons}>
                        { uploaded ?<Redirect to='/mainPage/Payroll/Bulk'/>: <p>File: {uploadedFileName}</p>}
                        <input className={classes.customFileInput} type="file" onChange={(e) => handleChange(e.target.files)}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );

};

export default PayrollType