import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrap from '../../../Hoc/Wrap';

const sideDrawer = ( props ) => {
    // let attachedClasses = [classes.SideDrawer, classes.Open];
    // if (props.open) {
    //     attachedClasses = [classes.SideDrawer, classes.Open];
    // }
    return (
        <Wrap >
            <Backdrop 
            // show={props.open} clicked={props.closed}
            />
            <div className={classes.SideDrawer} style={props.width}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrap>
    );
};

export default sideDrawer;