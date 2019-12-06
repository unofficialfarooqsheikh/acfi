import React from 'react';
import classes from './login.module.css';
import Left from './Left/left';

const Login = (props) => {
    let Number = Math.round(Math.random() * 10);
    const bg=(a)=> { switch(a){
        // case 0: return classes.background1
        // case 1: return classes.background2
        // case 2: return classes.background3
        // case 3: return classes.background4
        // case 4: return classes.background5
        // case 5: return classes.background6
        default: return classes.background7
    }}
    var BackgroundN =bg(Number)
    return (

        <div className={BackgroundN}>

            <div className={classes.Login}>

                <Left
                    classes={classes}
                    psdshow={props.psdshow}
                    click={props.click}
                    inputUserName={props.inputUserName}
                    inputPassword={props.inputPassword}
                    submitLogin={props.submitLogin}
                    un={props.un}/> {/* <Right classes={classes}/> */}
            </div>

        </div>

    );
};

export default Login;