import React, {useState} from 'react';

import axios from 'axios';
import classes from './LopUpload.module.css';
import {Redirect} from 'react-router-dom';


const LopUpload = (props) => {
  
    
    // console.log(uploaded,uploadedFileName)
    
    return (
        
        <div className={classes.LOPUploadBackground}>
            <div className={classes.LOPUploadSelectorBox}>
                <div>
                    <p className={classes.LOPUploadHeading}>Please Upload the L.O.P File</p>

                    <div className={classes.LOPUploadSelectorButtons}>
                        {/* { this.PushSubscriptionOptions.uploaded?<Redirect to='/mainPage/Payroll/Bulk'/>: <p>File: {uploadedFileName}</p>} */}
                        <input className={classes.customFileInput} type="file" accept='.txt' onChange={props.change}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );

};

export default LopUpload