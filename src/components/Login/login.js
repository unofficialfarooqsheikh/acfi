import React from 'react';
import classes from './login.module.css';
import Grid from '@material-ui/core/Grid';
import Left from './Left/left'
import Right from './Right/Right'


const login = (props) => (

            <Grid container direction="row" justify="center" alignItems="stretch" className={classes.Login}>
                <Grid item xs={4} zeroMinWidth className={classes.Logindivs}>
                <Left passwordshow={props.psdshow} click={props.click}/>
                </Grid>

                <Grid item xs={8} zeroMinWidth className={classes.Logindivs}>
                <Right />
                </Grid>
            </Grid>

);
    
export default login;