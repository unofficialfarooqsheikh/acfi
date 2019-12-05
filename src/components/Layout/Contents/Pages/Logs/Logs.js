import React, {Component} from 'react';
// import Button from '@material-ui/core/Button';
// import { Route} from 'react-router-dom';
// import LogsSelector from './LogsSelector'
import DataProvider from './DataProvider/DataProvider'
import classes from './Logs.module.css';
import PayrollIcon from '../../../../../assets/PayRoll.png'
import PFIcon from '../../../../../assets/PF.png'
import BankUploadIcon from '../../../../../assets/BankUpload.png'
import PaySlipIcon from '../../../../../assets/PaySlip.png'
import TDSIcon from '../../../../../assets/TDS.png'
 /*import Payslips from './Payslips'*/



class Logs extends Component {
render(){
    return( 
        <div>
            {/* <Route path= {this.props.match.url} exact component={LogsSelector}/>
            <Route path= {this.props.match.url+'/PayrollRows'} exact component={DataProvider}/>
            <Route path= {this.props.match.url+'/PF'} exact component={DataProvider}/>
            <Route path= {this.props.match.url+'/BankUploads'} exact component={DataProvider}/>
            <Route path= {this.props.match.url+'/TDS'} exact component={DataProvider}/> */}
           <div className={classes.container}>
                
                <div id='PayRollRows' className={classes.Cards}>    
                    <div><DataProvider keys='Prov1' heading='Pay Rolls' icon={PayrollIcon}/></div>
                    </div>
                
                <div id='PF' className={classes.Cards}>    
                        <div>
                        <DataProvider keys='Prov2' heading='PF' icon={PFIcon}/>
                        </div>
                    </div>
                
                <div id='BankUploads' className={classes.Cards}>    
                    <div><DataProvider keys='Prov3' heading='BankUploads' icon={BankUploadIcon}/></div>
                    </div>
                
                <div id='Payslips' className={classes.Cards}>    
                    <div><DataProvider keys='Prov4' heading='PaySlips' icon={PaySlipIcon}/></div>
                    </div>
                
                <div id='TDS' className={classes.Cards}>    
                    <div><DataProvider keys='Prov5' heading='TDS'icon={TDSIcon}/></div>
                    </div>
                
                
                {/* <div><img icon={PayrollIcon} /></div>
                <div><img icon={PFIcon} /></div>
                <div><img icon={BankUploadIcon} /></div>
                <div><img icon={PaySlipIcon} /></div>
                <div><img icon={TDSIcon} /></div> */}
          </div>
        </div>

    );
}


}

export default Logs;