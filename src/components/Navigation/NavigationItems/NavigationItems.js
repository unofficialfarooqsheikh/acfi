import React from 'react';
import {NavLink,withRouter} from 'react-router-dom'
import classes from './NavigationItems.module.css';


const navigationItems = (props) => {
    // console.log(props)
    return(
    <div className={classes.NavigationItems}>
        <ul >
          
                <NavLink to={{
                pathname: props.match.url
                }} activeClassName="active">
                    <li><span className={classes.main}>H</span> <span className={classes.extra}>Home Page</span></li></NavLink>  
            
                <NavLink to={{
                pathname: props.match.url+'/WorkForce'
                }} activeClassName="active">
                    <li><span className={classes.main}>W</span> <span className={classes.extra}>WorkForce</span></li></NavLink>  
            
                 <NavLink to={{
                    pathname: props.match.url+'/Payroll'
                    }}
                    activeClassName="active" >
                    <li><span className={classes.main}>P</span> <span className={classes.extra}>Payroll</span></li>  
                 </NavLink>                                                                             
            
                {/* <NavLink to={{
                pathname: '/mainPage/2'
            }} activeClassName="active">
                    <li><span className={classes.main}>2</span> <span className={classes.extra}>Dummy2</span></li></NavLink>   */}
                 <NavLink to={{
                pathname: props.match.url+'/Migrator'
                }} activeStyle={{
                    color: '#fa923f'}}>
                    <li><span className={classes.main}>M</span> <span className={classes.extra}>Migrator</span></li></NavLink>  
                 <NavLink to={{
                pathname: props.match.url+'/Logs'
                }} activeStyle={{
                    color: '#fa923f'}}>
                    <li><span className={classes.main}>L</span> <span className={classes.extra}>Logs</span></li></NavLink>  
            
        </ul>
    </div>);

};

export default withRouter(navigationItems);