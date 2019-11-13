import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './NavigationItems.module.css';


const navigationItems = (props) => {
    return(
    <div className={classes.NavigationItems}>
        <ul className={classes.NavigationItems}>
            <li><NavLink to={{
                pathname: '/mainpage/WorkForce'
                }} activeStyle={{
                    color: '#fa923f'}}><span className={classes.main}>W</span> <span className={classes.extra}>WorkForce</span></NavLink>  </li> 
            <li> <NavLink to={{
                    pathname: '/mainPage/Payroll'
                    }}
                    activeStyle={{
                        color: '#fa923f'}} >
                    <span className={classes.main}>P</span> <span className={classes.extra}>Payroll</span>  
                 </NavLink></li>    
            <li><NavLink to={{
                pathname: '/mainpage/2'
            }} activeStyle={{
                color: '#fa923f'}}><span className={classes.main}>2</span> <span className={classes.extra}>Dummy2</span></NavLink>  </li>
        </ul>
    </div>);

};

export default navigationItems;