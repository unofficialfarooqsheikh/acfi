import React, {useState} from 'react';
import 'fs';
// import Button from 'react-bootstrap/Button';
import classes from './PayrollType.module.css';
import {Redirect} from 'react-router-dom';


const PayrollType = () => {
    const [uploaded,
        setUploaded] = useState(false);
    const [uploadedFileName,setUploadedFileName] = useState('None');
    const handleChange = (e) => {
            const reader = new FileReader()
            reader.onload = async (e) => { 
            //   console.log(e.target.result)
              const text = (e.target.result.split('\n'))
            //   console.log(text)
              alert(text)
            };
            reader.readAsText(e.target.files[0])
        e = e.target.files
        // console.log(e[0].name);
        setTimeout(() => {
            setUploaded(true);
        }, 2000);
        setUploadedFileName(e[0].name);
    }
    // console.log(uploaded,uploadedFileName)
    
    return (
        
        <div className={classes.LOPUploadBackground}>
            <div className={classes.LOPUploadSelectorBox}>
                <div>
                    <p className={classes.LOPUploadHeading}>Please Upload the L.O.P File</p>

                    <div className={classes.LOPUploadSelectorButtons}>
                        { uploaded ?<Redirect to='/mainPage/Payroll/Bulk'/>: <p>File: {uploadedFileName}</p>}
                        <input className={classes.customFileInput} type="file" accept='.txt' onChange={(e) => handleChange(e)}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );

};

export default PayrollType