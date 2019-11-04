import React from 'react';
import classes from './logo.module.css';
import logoimg from '../../assets/Applogo.png';

const logo = () => (   
        <img src={logoimg} alt="LogoShort" className={classes.logoimg}></img>
);
    
export default logo;