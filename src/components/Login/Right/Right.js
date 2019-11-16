import React from 'react';
// import classes from '../login.module.css'
import Wrap from '../../../Hoc/Wrap'
import image from '../../../assets/image.png'

const right = (props) => (
    <Wrap className={props.classes.right}>
        <img src={image} alt="BackgroundImage" className={props.classes.Img}></img>
        {/* <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> */}
    </Wrap>
);
    
export default right;