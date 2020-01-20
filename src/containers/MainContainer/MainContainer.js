import React, {Component} from 'react';
import AcFiLogin from '../AcFiLogin/AcFiLogin';
import MainPageLayout from '../../components/Layout/MainPageLayout/MainPageLayout';
import {Route, Switch ,Redirect} from 'react-router-dom';
import SecureRoute from '../../containers/SecureRoute/SecureRoute'


class MainContainer extends Component {

    render() {
        console.log("Maincontainer.js"+this.props);
        let authenticate= sessionStorage.getItem('Token');
        // let authenticate = true;
        // console.log(authenticate)
        let RedirectToMainPage = null;
        if(authenticate){
            console.log("redirect to mainpage payroll")
            RedirectToMainPage=(<Redirect to={{
            pathname: '/mainPage'
            }} />); 
        }
        else{
            console.log("else")
        }
        return (

            <div style={{
                    'fontFamily': "'Merriweather', serif !important'"}}>
                {RedirectToMainPage}
                <Switch>
                <Route path={"/"} exact component={AcFiLogin}/>
                <SecureRoute path="/mainPage"  component={MainPageLayout}/>
                <Route path="*"  render={ ()=>{return <h1>404 Page Not Found</h1>}}/>
                </Switch> 
            </div>
        );
    }

}
export default MainContainer;