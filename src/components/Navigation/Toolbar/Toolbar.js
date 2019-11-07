import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = ( props ) => {
    
    let c1 = [classes.Toolbar, classes.leftToolbar];
    let c2 = [classes.Toolbar, classes.rightToolbar];
    return(<div className={classes.Toolbar}>
        <header className={c1.join(' ')} >
        Toolbar
        </header>
        <header className={c2.join(' ')} >
           <h3>AcFi</h3>
        </header>
    </div>)

};

    
    
    

export default toolbar;