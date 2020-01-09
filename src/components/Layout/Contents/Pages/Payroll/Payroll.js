import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Bulk from './Bulk/Bulk';
import LopUpload from './LopUpload/LopUpload';
import PayrollPreview from './PayrollPreview/PayrollPreview'
import SecureRoute from '../../../../../containers/SecureRoute/SecureRoute'
import Reports from './Reports/Reports';

class Payroll extends Component{

      state ={
            uploaded : false,
            Data : null,
            proceedtoPreview: false,
            month : null,
            year: null,
            comeback: false,
            proceedForReports: false,
      }
      componentDidMount(){
            console.log(this.state)
            //here the data from dummy API and storing in the data by splicing it from API
            // axios.get('http://192.168.2.155:8080/')
            // .then(response =>{
            //     console.log(response);}
            // )
            // .catch(error => {
            //           console.log(error);
              
            //       });
      }
      handleChange = (e) => {
            if(e.target.result !== null)
            {
            const reader = new FileReader()
            reader.onload = async (e) => { 
            //   console.log(e.target.result)
              const data = (e.target.result)
            //   console.log(text)
            var url= "http://127.0.0.1:5000/lopupload";
            axios.post(url,data,{
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                        }
            })
              .then((response) => {
                  // console.log("Response",response);
                  this.setState({
                        uploaded: true,
                        Data: response.data
                  });
                  // console.log(this.state)
            })
            .catch((error) =>{
                console.log("Error",error);
            });
            //   alert(data)
            };
            reader.readAsText(e.target.files[0])
            e = e.target.files
            // console.log(e[0].name);
            // console.log(this.state)
            }
      }
      ConfirmHandler =(confirm,month,year)=>{
      let r = window.confirm("Please make sure Details are Correct! Then only proceed");
      if (r == true) {
            //      ______________________________________
            var url= "http://127.0.0.1:5000/upload";
            axios.post(url,this.state.Data,{
                  headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                              }
                  })
                  .then((response) => {
                        console.log("Response",response);
                        // console.log(this.state)
                  })
            
      //      ______________________________________
            this.setState({
                  proceedtoPreview: confirm,
                  month : month,
                  year: year
            })
          }
      }
      ComebackHandler = () =>{
            this.setState({proceedtoPreview: false})
      }
      ConfirmPayrollPreviewHandler =()=>{
            console.log(this.state.Data)
      
            this.setState({proceedForReports: true})
      }
      CancelHandler = () =>{
            this.setState({uploaded: false})
      }
      resultFormReportsModuleHandler =()=>{
            alert("Success")
      }
render(){
      let LopUploadPopUp = (  
      <div>
            <LopUpload change={this.handleChange}/>    
      </div>
      );
      let BulkModule = (
      <div>
            <Bulk Data={this.state.Data} confirm={this.ConfirmHandler} cancel={this.CancelHandler}/>
      </div>);
      let PayrollPreviewModule = (
            <div>
                  <PayrollPreview data={this.state.Data} comeback={this.ComebackHandler} confirmPayrollPreview={this.ConfirmPayrollPreviewHandler}/>
            </div>
      ) 
      let ReportsModule =(
           <Reports month={this.state.month} year={this.state.year} result={this.resultFormReportsModuleHandler}/>
      ) 
      let RenderedModule= null;
      if(this.state.uploaded === true && this.state.proceedtoPreview === false && this.state.proceedForReports !== true){
            RenderedModule = BulkModule;
      }
      else if(this.state.uploaded !== true && this.state.proceedtoPreview === false && this.state.proceedForReports !== true){
            RenderedModule = LopUploadPopUp;
      }
      else if(this.state.uploaded === true && this.state.proceedtoPreview === true && this.state.proceedForReports !== true){
            RenderedModule = PayrollPreviewModule;
      }
      else if(this.state.uploaded === true && this.state.proceedtoPreview === true && this.state.proceedForReports === true){
            RenderedModule = ReportsModule;
      }
    return(
      RenderedModule
    );
};
    


}

export default Payroll;