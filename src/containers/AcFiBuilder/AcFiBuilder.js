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
        loginAllowed: false
    }

    showPasswordHandler = () => {
        const doesShow = this.state.loginAllowed;
        this.setState( (prevState, props) => {
            return{
                loginAllowed: !doesShow
            }
            
        }); 
    }

    render(){
        let mainPage = null;
        if(this.state.loginSuccess)
        {
            mainPage = (
                <Layout>
                    This Layout has a div a sidebar and a menu bar
                </Layout>
                );
        }
        return(
            <Wrap className={classes.AcFi}>
                <Login psdshow={this.state.loginAllowed} click={this.showPasswordHandler} />
                {mainPage}
            </Wrap>
        );
    }

}

export default AcFiBuilder;