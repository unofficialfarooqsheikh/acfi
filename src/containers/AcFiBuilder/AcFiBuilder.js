import React, {Component} from 'react';
import classes from './AcFiBuilder.module.css';
import Wrap from '../../Hoc/Wrap'
import Layout from '../../components/Layout/Layout';
import Login from '../../components/Login/login'

class AcFiBuilder extends Component {

    state = {
        loginCredentials: {
            username: 'Admin',
            password: 'Admin'
        },
        loginSuccess:false,
        loginAllowed: false,
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
    loginHandler =() => {
        const suc = {
            ...this.state.loginSuccess
        }
        console.log(this.state.loginInputs ,"login inputs","login Credentials", this.state.loginCredentials );
        if(this.state.loginInputs.username === this.state.loginCredentials.username && this.state.loginInputs.password === this.state.loginCredentials.password){
            suc.loginSuccess= true;
            this.setState({loginSuccess: suc});
        }
        else{
            alert('Please Check Your Email & Password');
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
        let mainPage = null;
        let loginPage = (<Login psdshow={this.state.loginAllowed} 
            click={this.showPasswordHandler} 
            loginCheck={this.loginHandler} 
            inputUserName={(event) => this.inputUserNameHandler(event)}
            inputPassword={(event) => this.inputPasswordHandler(event)}
            submitLogin={this.loginHandler}
            />);
        if(this.state.loginSuccess)
        {
            mainPage = (
                <Layout>
                    This Layout has a div a sidebar and a menu bar
                </Layout>
                );
            loginPage=null;
        }
        return(
            <Wrap className={classes.AcFi}>
                {loginPage}
                {mainPage}
            </Wrap>
        );
    }

}

export default AcFiBuilder;