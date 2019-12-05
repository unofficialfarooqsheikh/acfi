import React, {Component} from 'react';
import AcFiLogin from '../AcFiLogin/AcFiLogin';
import MainPageLayout from '../../components/Layout/MainPageLayout/MainPageLayout';
import {Route} from 'react-router-dom';


class MainContainer extends Component {

    render() {
        // console.log("Maincontainer.js"+this.props);
        return (

            <div style={{
                    'fontFamily': "'Merriweather', serif !important'"}}>
                <Route path={"/"} exact component={AcFiLogin}/>
                <Route path="/mainPage"  component={MainPageLayout}/>
                
            </div>

        );
    }

}
export default MainContainer;