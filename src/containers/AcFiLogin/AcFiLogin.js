import React, {Component} from 'react';
import axios from 'axios';
import classes from '../AcFiLogin/AcFiLogin.module.css';
import Wrap from '../../Hoc/Wrap';
// import Layout from '../../components/Layout/MainPageLayout/MainPageLayout';
import Login from '../../components/Login/login';
import {Redirect} from 'react-router-dom';

class AcFiLogin extends Component {

    state = {
        loggedInUser:'',
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
        // console.log(e.which)
        // console.log(this.state.loginInputs ,"login inputs","login Credentials", this.state.loginCredentials );
        if(e.nativeEvent.type === 'click' || e.which === 13){
            // console.log(e.key);
            // Connection to API
            var url= "http://127.0.0.1:5000/auth";
            let data = JSON.stringify({
                username: this.state.loginInputs.username,
                password: this.state.loginInputs.password
            });
            axios.post(url,data,{
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                        }
            })
              .then((response) => {
                // console.log("Response",response);
                sessionStorage.setItem('Token',response.data['access_token'] )
                login();
            })
            .catch((error) =>{
                console.log("Error",error);
                login();
            });
            //
            
             const login=()=> {
                let authenticate= sessionStorage.getItem('Token');
                // alert("token",authenticate)
                // if(authenticate){ //Uncomment for working Login
                console.log('hey');
                if(true){
                    suc.loginSuccess= true;
                    suc.loggedInUser = this.state.loginInputs.username;
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

export default AcFiLogin;