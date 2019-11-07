import React, {Component} from 'react';
import AcFiLogin from '../AcFiLogin/AcFiLogin';
import MainPageLayout from '../../components/Layout/MainPageLayout/MainPageLayout';
import {Route} from 'react-router-dom';


class MainContainer extends Component {

    render() {

        return (

            <div >
                <Route path="/" exact component={AcFiLogin}/>
                <Route path="/mainPage"  component={MainPageLayout}/>
                
            </div>

        );
    }

}
export default MainContainer;