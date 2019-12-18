import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import classes from './NavigationItems.module.css';
import Image from '../../../assets/log-out.png'

const navigationItems = (props) => {
    // console.log(props)
    return (
        <div className={classes.NavigationItems}>
            <ul >

                {/* <li>
                    <NavLink
                        to={{
                        pathname: props.match.url + '/home'
                    }}
                        activeStyle={{
                        color: '#fa923f'
                    }}>
                        <span className={classes.main}><div className={classes.emojis}><span role="img" aria-label="Home" style={{fontSize:'25px'}}>🏠</span> <span style={{fontSize:'15px'}}>Home</span></div></span>
                        <span className={classes.extra}>Home Page</span>
                    </NavLink>
                </li> */}

                <li>
                    <NavLink
                        to={{
                        pathname: props.match.url + '/WorkForce'
                    }}
                        activeStyle={{
                        color: '#fa923f'
                    }} onClick={props.clicked}>
                        <span className={classes.main}><div className={classes.emojis}><span role="img" aria-label="WorkForce" style={{fontSize:'25px'}}>🏢</span> <span style={{fontSize:'15px'}}>WorkForce</span></div></span>
                        <span className={classes.extra}>WorkForce</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={{
                        pathname: props.match.url + '/Payroll'
                    }}
                        activeStyle={{
                        color: '#fa923f'
                    }} onClick={props.clicked} >
                        <span className={classes.main}><div className={classes.emojis}><span role="img" aria-label="Pay Roll" style={{fontSize:'25px'}}>🧾</span> <span style={{fontSize:'15px'}}>Payroll</span></div></span>
                        <span className={classes.extra}>Payroll</span>
                    </NavLink>
                </li>

                {/* <NavLink to={{
                pathname: '/mainPage/2'
            }} activeClassName="active">
                    <li><span className={classes.main}>2</span> <span className={classes.extra}>
                    Dummy2</span></li></NavLink>   */}
                <li>
                    <NavLink
                        to={{
                        pathname: props.match.url + '/Migrator'
                    }}
                        activeStyle={{
                        color: '#fa923f'
                    }} onClick={props.clicked}>
                        <span className={classes.main}><div className={classes.emojis}><span role="img" aria-label="Migrate" style={{fontSize:'25px'}}>🚶</span> <span style={{fontSize:'15px'}}>Migrate</span></div></span>
                        <span className={classes.extra}>Migrator</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={{
                        pathname: props.match.url + '/Logs'
                    }}
                        activeStyle={{
                        color: '#fa923f'
                    }} onClick={props.clicked}>
                        <span className={classes.main}><div className={classes.emojis}><span role="img" aria-label="Logs" style={{fontSize:'25px'}}>📕</span> <span style={{fontSize:'15px'}}>Logs</span></div></span>
                        <span className={classes.extra}>Logs</span>
                    </NavLink>
                
                
                </li>
                    <li>
                        <NavLink to='/' >
                        <div onClick={()=>{sessionStorage.removeItem("Token")}}>
                            
                            <span className={classes.main}><div className={classes.emojis}>
                                <span role="img" aria-label="LogOut" style={{fontSize:'25px'}}>🔒</span>  
                                <span style={{fontSize:'15px'}}>LogOut</span></div></span>
                                <span className={classes.UserLogout}><span className={classes.extra}>Log Out</span> <img src={Image} style={{width:'20px',height:'20px'}} alt='LogOutPng'></img></span>
                                
                        </div>
                            
                        </NavLink>
                    </li>

            </ul>
                        
        </div>
    );

};

export default withRouter(navigationItems);