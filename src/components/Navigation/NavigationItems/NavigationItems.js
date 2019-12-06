import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import classes from './NavigationItems.module.css';

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
                    }}>
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
                    }}>
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
                    }}>
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
                    }}>
                        <span className={classes.main}><div className={classes.emojis}><span role="img" aria-label="Logs" style={{fontSize:'25px'}}>📕</span> <span style={{fontSize:'15px'}}>Logs</span></div></span>
                        <span className={classes.extra}>Logs</span>
                    </NavLink>
                </li>

            </ul>
        </div>
    );

};

export default withRouter(navigationItems);