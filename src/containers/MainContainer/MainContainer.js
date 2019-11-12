import React, {Component} from 'react';
import AcFiLogin from '../AcFiLogin/AcFiLogin';
import {Route} from 'react-router-dom';



class MainContainer extends Component {


    render() {
        // console.log("Maincontainer.js",this.props);
        return (

            <div style={{
                WebkitOverflowScrolling: "touch"
            }}>
                <AcFiLogin />
                
            </div>

        );
    }

}
export default MainContainer;