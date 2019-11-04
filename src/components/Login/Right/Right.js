import React from 'react';
import classes from '../login.module.css'
import Wrap from '../../../Hoc/Wrap'
import image from '../../../assets/image.png'

const right = (props) => (
    <Wrap className={classes.right}>
        <img src={image} alt="BackgroundImage" className={classes.rightImg}></img>
    </Wrap>
);
    
export default right;