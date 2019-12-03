import React, {Component} from 'react';
// import Button from '@material-ui/core/Button';
// import { Route} from 'react-router-dom';
// import LogsSelector from './LogsSelector'
import DataProvider from './DataProvider/DataProvider'
import classes from './buttons.module.css';

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
           {/* <div className={classes.container}> */}
                <DataProvider/>
           {/* </div> */}a
        </div>

    );
}


}

export default Logs;