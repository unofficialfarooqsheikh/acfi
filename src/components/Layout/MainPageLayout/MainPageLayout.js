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



const MainPageLayout =( props ) => {
    // console.log(props)
    const [sidenav,setSidenav] = useState(false);
    const sidenavHandler =() => {
        setSidenav(!sidenav);
    } 
    let width =(sidenav) ? { width:'20vw'}:{ width:'0' }
    let margin =(sidenav) ? { marginLeft:'20vw',width: 'calc(100% - 20vw)'}:{ marginLeft:'0', width: '100%' }
    let marginLeft =(sidenav) ? { marginLeft:'17%'}: null;
    return(<Wrap>
        <div>
            { sidenav ? <SideDrawer width={width}/> : null }
            <Toolbar sidenavHandler={sidenavHandler} marginLeft={marginLeft} sidenavOpen={sidenav}/> 
            <Backdrop />
            <ContentsContainer margin={margin}>
            <Route path={props.match.url+'/Payroll'} component={Payroll}/>
            <Route path={props.match.url} exact component={Welcome}/>
            <Route path={props.match.url+'/WorkForce'} exact component={WorkForce}/>
            <Route path={props.match.url+'/Migrator'} exact component={Migrator}/>
            <Route path={props.match.url+'/Logs'} component={Logs}/>
            </ContentsContainer>

        </div>
    </Wrap>);   
}
       
 
       
        
export default MainPageLayout; 