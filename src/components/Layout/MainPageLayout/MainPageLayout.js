import React,{useState} from 'react';
import {Route} from 'react-router-dom';
import Wrap from '../../../Hoc/Wrap';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ContentsContainer from '../../UI/ContentsContainer/ContentsContainer';
import Welcome from '../Contents/Pages/Welcome/Welcome';
import Payroll from '../Contents/Pages/Payroll/Payroll';
import WorkForce from '../Contents/Pages/WorkForce/WorkForce';
import Migrator from '../Contents/Pages/Migrator/Migrator';
import Logs from '../Contents/Pages/Logs/Logs';
import NotificationBar from '../../Navigation/NotificationBar/NotificationBar'



const MainPageLayout =( props ) => {
    // console.log(props)
    const [sidenav,setSidenav] = useState(false);
    const sidenavHandler =() => {
        setSidenav(!sidenav);
    } 
    // let width =(sidenav) ? { width:'18vw'}:{ width:'0' }
    let ShowNavBar =(sidenav) ? {display:'inline'} :{display:'none'}
    let margin =(sidenav) ? { marginLeft:'18vw',width: 'calc(100% - 18vw)'}:{ marginLeft:'0', width: '100%' }
    // let marginLeft =(sidenav) ? { marginLeft:'17%'}: null;
    return(<Wrap>
        <div>
            <SideDrawer Show={ShowNavBar}/>
            <Toolbar sidenavHandler={sidenavHandler}  sidenavOpen={sidenav}/> 
            <NotificationBar/>
            <ContentsContainer >
            <Backdrop left={margin} show={sidenav} clicked ={sidenavHandler}/>
            <Route path={props.match.url+'/Payroll'} component={Payroll}/>
            <Route path={props.match.url+'/WorkForce'} exact component={WorkForce}/>
            <Route path={props.match.url+'/Migrator'} exact component={Migrator}/>
            <Route path={props.match.url+'/Logs'} component={Logs}/>
            </ContentsContainer>
        </div>
    </Wrap>);   
}
       
 
       
        
export default MainPageLayout; 