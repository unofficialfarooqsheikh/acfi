import React from 'react';
import playbtn from '../../assets/playbtn.png';
import Wrap from '../../Hoc/Wrap';

const playBtn =(props) => {
    
    return(
    <Wrap >
        <img src={playbtn} alt='styleButton' className={props.className}></img>
    </Wrap>
)}


export default playBtn;