import React,{useState} from 'react';
import classes from './NotificationBar.module.css'

export default function NotificationBar() {

    const [open,setOpen] =useState(false);
    console.log(open);
    return (
        <div className={classes.topDiv}>
             <div className={classes.NotificationBarContainer} >
                <div className={classes.NotificationBarHead} onClick={()=>{setOpen(!open)}}>
                <span className={classes.zero}>{'4'}</span>
                    <span role="img" aria-label="NotificationBell" className={classes.one}> &#128276; {"  "} Notifications </span>
                    <span role="img" aria-label="NotificationBell" className={classes.two}>	&#128276;</span>
                </div>
                {(open)?
                 <div className={classes.NotificationBarBody}>
                 <span >A notification message.1.</span>
                 <span >A notification message.2.</span>
                 <span >A notification message.3.</span>
                 <span >A notification message.4.</span>
                </div>:null}
                
            </div>
        </div>
    )
}
