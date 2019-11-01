import React from 'react';
import Wrap from '../../Hoc/Wrap'
import classes from './Layout.module.css'

const Layout =( props ) => (
        <Wrap>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Wrap>
);  
       
        
export default Layout; 