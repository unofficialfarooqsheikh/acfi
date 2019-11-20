import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = ( props ) => {
    if(props.sidenavOpen){
            var bar1=[classes.change, classes.bar1];
            var bar2=[classes.change, classes.bar2];
            var bar3=[classes.change, classes.bar3];
    }
    else{
            var bar1=[classes.bar1]
            var bar2=[classes.bar2]
            var bar3=[classes.bar3]
        }
    let c1 = [classes.Toolbar, classes.leftToolbar];
    let c2 = [classes.Toolbar, classes.rightToolbar];
    return(<div className={classes.Toolbar}>
    
        <div className={classes.container} onClick={props.sidenavHandler} >
        <div className={bar1.join(' ')}></div>
        <div className={bar2.join(' ')}></div>
        <div className={bar3.join(' ')}></div>
        </div>
        <header className={c2.join(' ')} >
           <h3>AcFi</h3>
        </header>
    </div>)

};

    
    
    

export default Toolbar;