import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = ( props ) => {
    var bar1,bar2,bar3;
    if(props.sidenavOpen){
            bar1=[classes.change, classes.bar1];
            bar2=[classes.change, classes.bar2];
            bar3=[classes.change, classes.bar3];
    }
    else{
            bar1=[classes.bar1]
            bar2=[classes.bar2]
            bar3=[classes.bar3]
        }
    return(<div className={classes.Toolbar}>
    
        <header className={classes.ToolbarHeading} >
        <div className={classes.container} onClick={props.sidenavHandler} >
        <div className={bar1.join(' ')}></div>
        <div className={bar2.join(' ')}></div>
        <div className={bar3.join(' ')}></div>
        </div>
           <h3 className={classes.AppName}>AcFi</h3>
           <div className={classes.UserDetailscontainer}>
               <p>Welcome: {'username'} </p>
               <p>Welcome: {'username'} </p>
           </div>
        </header>

    </div>)

};

    
    
    

export default Toolbar;