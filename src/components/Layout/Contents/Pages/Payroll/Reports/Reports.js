import React ,{useState}from 'react';
import classes from './Report.module.css';
import InputSwitch from '../../../../../UI/Input/InputSwitch';
import Button from 'react-bootstrap/Button';

const Reports=(props) => {
    const [selectAll, setSelectAll] = React.useState(false);
    const [bankReport, setBankReport] = React.useState(false);
    const [pFStatementReport, setPFStatementReport] = React.useState(false);
    const [tDSStatementReport, setTDSStatementReport] = React.useState(false);
    return(
        <div className={classes.ReportCard}>
            <div>
                <div className={classes.heading}>
                    <label htmlFor={'SelectAll'}><h1>Report</h1></label>
                    <InputSwitch id={'SelectAll'} change={()=>{
                        setSelectAll(!selectAll);
                        setBankReport(!selectAll);
                        setPFStatementReport(!selectAll);
                        setTDSStatementReport(!selectAll);
                    }} checkedState={selectAll}/>
                </div>
                <div>
                    <InputSwitch id='BankReport' label={'BankReport-'+props.month+props.year} change={()=>{setBankReport(!bankReport)}} checkedState={bankReport}/>
                    <InputSwitch id='PFStatementReport' label={'PFStatementReport-'+props.month+props.year} change={()=>{setPFStatementReport(!pFStatementReport)}} checkedState={pFStatementReport}/>
                    <InputSwitch id='TDSStatementReport' label={'TDSStatementReport-'+props.month+props.year} change={()=>{setTDSStatementReport(!tDSStatementReport)}} checkedState={tDSStatementReport}/>
                </div>
            </div>
            <div>
                <br/>
                <br/>
                <Button>Send Email</Button>
                <Button>Send Email & Download</Button>
            </div>
        </div>
    )
};         

export default Reports;


