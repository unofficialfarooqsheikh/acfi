import React from 'react';
import {Route,} from 'react-router-dom';
import Wrap from '../../../Hoc/Wrap';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ContentsContainer from '../../UI/ContentsContainer/ContentsContainer';
import Welcome from '../Contents/Pages/Welcome/Welcome';
import Payroll from '../Contents/Pages/Payroll/Payroll';
import WorkForce from '../Contents/Pages/WorkForce/WorkForce';


const MainPageLayout =( props ) => {
    // console.log("MainPageLayout.js"+props);
    return(<Wrap>
        <div>
            <SideDrawer /> 
            <Toolbar /> 
            <Backdrop />
            <ContentsContainer >
            <Route path="/mainPage/Payroll" component={Payroll}/>
            <Route path="/mainPage" exact component={Welcome}/>
            <Route path="/mainPage/WorkForce" exact component={WorkForce}/>
            </ContentsContainer>
        </div>
    </Wrap>);   
}
       
 
       
        
export default MainPageLayout; 