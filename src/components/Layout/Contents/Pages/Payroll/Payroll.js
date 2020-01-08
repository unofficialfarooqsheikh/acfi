import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Bulk from './Bulk/Bulk';
import LopUpload from './LopUpload/LopUpload';
import PayrollPreview from './PayrollPreview/PayrollPreview'
import SecureRoute from '../../../../../containers/SecureRoute/SecureRoute'

class Payroll extends Component{

      state ={
            uploaded : false,
            Data : null,
            proceed: false,
            month : null
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
      ConfirmHandler =(confirm,month)=>{
      let r = window.confirm("Please make sure Details are Correct! \n cannot Comeback once Proceeded \n any corrections would require to recreate the whole process again");
      if (r == true) {
            this.setState({
                  proceed: confirm,
                  month : month
            })
          }
      }
render(){
      let LopUploadPopUp = (  
      <div>
            <LopUpload change={this.handleChange}/>    
      </div>
      );
      let BulkModule = (
      <div>
            <Bulk Data={this.state.Data} confirm={this.ConfirmHandler}/>
      </div>);
      let PayrollPreviewModule = (
            <div>
                  <PayrollPreview data={this.state.Data}/>
            </div>
      )   
      let RenderedModule= null;
      if(this.state.uploaded === true && this.state.proceed === false){
            RenderedModule = BulkModule;
      }
      else if(this.state.uploaded !== true && this.state.proceed === false){
            RenderedModule = LopUploadPopUp;
      }
      else {
            RenderedModule = PayrollPreviewModule;
      }
    return(
      RenderedModule
    );
};
    


}

export default Payroll;