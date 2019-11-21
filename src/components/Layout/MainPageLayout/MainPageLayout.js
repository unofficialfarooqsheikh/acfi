import React,{useState} from 'react';
import {Route,} from 'react-router-dom';
import Wrap from '../../../Hoc/Wrap';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ContentsContainer from '../../UI/ContentsContainer/ContentsContainer';
import Welcome from '../Contents/Pages/Welcome/Welcome';
import Payroll from '../Contents/Pages/Payroll/Payroll';
import WorkForce from '../Contents/Pages/WorkForce/WorkForce';
import Migrator from '../Contents/Pages/Migrator/Migrator';


const MainPageLayout =( props ) => {
    const [sidenav,setSidenav] = useState(false);
    const sidenavHandler =() => {
        setSidenav(!sidenav);
        console.log(sidenav);
    } 
    let width =(sidenav) ? { width:'20vw'}:{ width:'0' }
    let margin =(sidenav) ? { marginLeft:'20vw',width: 'calc(100% - 20vw)'}:{ marginLeft:'0', width: '100%' }
    let marginLeft =(sidenav) ? { marginLeft:'17%'}: null;
    console.log(width,margin)  


    return(<Wrap>
        <div>
            { sidenav ? <SideDrawer width={width}/> : null }
            <Toolbar sidenavHandler={sidenavHandler} marginLeft={marginLeft} sidenavOpen={sidenav}/> 
            <Backdrop />
            <ContentsContainer margin={margin}>
            <Route path="/mainPage/Payroll" component={Payroll}/>
            <Route path="/mainPage" exact component={Welcome}/>
            <Route path="/mainPage/WorkForce" exact component={WorkForce}/>
            <Route path="/mainPage/Migrator" exact component={Migrator}/>
            </ContentsContainer>
        </div>
    </Wrap>);   
}
       
 
       
        
export default MainPageLayout; 