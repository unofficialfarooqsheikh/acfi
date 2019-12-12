import React, {Component} from 'react';
import classes from '../AcFiLogin/AcFiLogin.module.css'
import Wrap from '../../Hoc/Wrap'
// import Layout from '../../components/Layout/MainPageLayout/MainPageLayout';
import Login from '../../components/Login/login';
import {Redirect} from 'react-router-dom';

class AcFiBuilder extends Component {

    state = {
        loginCredentials: {
            username: 'Admin',
            password: 'Admin'
        },
        logedInUser:'',
        loginSuccess:false,
        loginAllowed: false,
        loginCheck:false,
        loginInputs: {
            username: '',
            password: ''
        }
    }

    showPasswordHandler = () => {
        const doesShow = this.state.loginAllowed;
        this.setState( (prevState, props) => {
            return{
                loginAllowed: !doesShow
            }
            
        }); 
    }
    loginHandler =(e) => {
        const suc = {
            ...this.state
        }
        // console.log(e)
        // console.log(this.state.loginInputs ,"login inputs","login Credentials", this.state.loginCredentials );
        if(e.key === 'Enter' || e.nativeEvent.type === 'click' ){
            // console.log(e.key);
            if(this.state.loginInputs.username === this.state.loginCredentials.username && this.state.loginInputs.password === this.state.loginCredentials.password){
                suc.loginSuccess= true;
                suc.logedInUser = this.state.loginCredentials.username;
                // console.log(suc.logedInUser);
                this.setState({
                    loginInputs: {
                        username: '',
                        password: ''
                    },
                    loginSuccess: suc.loginSuccess,
                    logedInUser: suc.logedInUser});
            }
            else{
                alert('Please Check Your Email & Password');
                // highLight the username and password in red for 2secs
                this.setState({
                    loginCheck: (!this.state.loginAllowed)
                })
                setTimeout(() => {
                    this.setState({
                        loginCheck: (this.state.loginAllowed)
                    })
                }, 2000);
            }   
        }
    }
    inputUserNameHandler = (event) => {
        const inputEmail = {
            ...this.state.loginInputs
        }
        inputEmail.username = event.target.value;
        this.setState({ loginInputs: inputEmail});
        // console.log("inInputChange Email");
    }
    inputPasswordHandler = (event) =>{
        const inputEmail = {
            ...this.state.loginInputs
        }
        inputEmail.password = event.target.value;
        this.setState({ loginInputs: inputEmail});
        // console.log("inInputChange Password");
    }
  
    render(){
        
        
        let loginPage = (<Login psdshow={this.state.loginAllowed} 
            click={this.showPasswordHandler} 
            loginCheck={this.loginHandler} 
            inputUserName={(event) => this.inputUserNameHandler(event)}
            inputPassword={(event) => this.inputPasswordHandler(event)}
            submitLogin={(event)=> this.loginHandler(event)}
            un={this.state}
            />);
            let renderLink = null;
        if(this.state.loginSuccess)
        {   
               loginPage=null;
                renderLink = (  
                        <Redirect to={{
                            pathname: '/mainPage/WorkForce',
                            state: { names: this.state.logedInUser}
                            //      
                            // }
                            }} />
                );
            }

        return(
            <Wrap className={classes.AcFi} >
                {loginPage}
                {renderLink}
            </Wrap>
        );
    }

}

export default AcFiBuilder;