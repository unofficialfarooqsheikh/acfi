import React, {Component} from 'react';
import AcFiLogin from '../AcFiLogin/AcFiLogin';
import MainPageLayout from '../../components/Layout/MainPageLayout/MainPageLayout';
import {Route, Switch} from 'react-router-dom';


class MainContainer extends Component {

    render() {
        // console.log("Maincontainer.js"+this.props);
        return (

            <div style={{
                    'fontFamily': "'Merriweather', serif !important'"}}>
                <Switch>
                <Route path={"/"} exact component={AcFiLogin}/>
                <Route path="/mainPage"  component={MainPageLayout}/>
                <Route path="*"  render={ ()=>{return <h1>404 Page Not Found</h1>}}/>
                </Switch> 
            </div>
        );
    }

}
export default MainContainer;