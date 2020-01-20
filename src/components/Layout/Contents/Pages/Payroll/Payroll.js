import React, {Component} from 'react';
import axios from 'axios';
import {Route,Redirect} from 'react-router-dom';
import Bulk from './Bulk/Bulk';
import LopUpload from './LopUpload/LopUpload';
import PayrollPreview from './PayrollPreview/PayrollPreview'
import SecureRoute from '../../../../../containers/SecureRoute/SecureRoute'
import Reports from './Reports/Reports';
import ErrorComponent from '../../../../UI/ErrorComponent/ErrorComponent';
import Loading from '../../../../UI/Loading/Loading'

class Payroll extends Component{

      state ={
            uploaded : false,
            Data : null,
            proceedtoPreview: false,
            month : null,
            year: null,
            comeback: false,
            proceedForReports: false,
            error: false,
            loading: false
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
            this.setState({loading: true});
            if(e.target.result !== null)
            {
            const reader = new FileReader();
            let data = null;
            reader.onload = async (e) => { 
            console.log(e.target.result);
            data = (e.target.result);
            console.log(data);
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
                        Data: response.data,
                        loading: false
                  });
                  // console.log(this.state)
            })
            .catch((error) =>{
                console.log("Error",error);
                this.setState({
                              error: error.message+"..",
                              uploaded: false,
                              loading: false
                              });
            });
            }
            //   alert(data)
            reader.readAsText(e.target.files[0]);
            e = e.target.files;

            //   alert(data)
           
            // console.log(e[0].name);
            // console.log(this.state)
            }
      }
            // .catch((error)=> {
            //       // console.log(error.message,error.name,error.stack);   
            //       this.setState({
            //             error: error.message+"..",
            //             uploaded: false
            //             });
            //       });
          

            //   alert(data)
           
            // console.log(e[0].name);
            // console.log(this.state)
            
      ConfirmHandler =(confirm,month,year)=>{
      //      _____________________________________
            this.setState({
                  proceedtoPreview: confirm,
                  month : month,
                  year: year
            })
          };
      ComebackHandler = () =>{
            this.setState({proceedtoPreview: false});
      };
      
      ConfirmPayrollPreviewHandler =()=>{
            this.setState({loading: true});
            // console.log(this.state.Data)
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
                        this.setState({loading: true});
                  })
                  .catch((error)=>{
                        console.log(error);
                        this.setState({error: error,loading: true});
                  })
            this.setState({proceedForReports: true})
      }};
      CancelHandler = () =>{
            this.setState({uploaded: false})
      };
      resultFormReportsModuleHandler =()=>{
            alert("Success")
      };
      
render(){
      console.log("Payroll",this.props);
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
      );
      let ReportsModule =(
           <Reports month={this.state.month} year={this.state.year} result={this.resultFormReportsModuleHandler}/>
      );
      let ErrorModule = (
            <ErrorComponent errorMsg={this.state.error} back={this.props.match.url}/>
      );
      let LoadingEffect = (<Loading />);
      let RenderedModule= null;
      if(this.state.loading === true){
            RenderedModule = LoadingEffect;
      }
      else if(this.state.uploaded === true && this.state.proceedtoPreview === false && this.state.proceedForReports !== true && this.state.error === false){
            RenderedModule = BulkModule;
      }
      else if(this.state.uploaded !== true && this.state.proceedtoPreview === false && this.state.proceedForReports !== true && this.state.error === false){
            RenderedModule = LopUploadPopUp;
      }
      else if(this.state.uploaded === true && this.state.proceedtoPreview === true && this.state.proceedForReports !== true && this.state.error === false){
            RenderedModule = PayrollPreviewModule;
      }
      else if(this.state.uploaded === true && this.state.proceedtoPreview === true && this.state.proceedForReports === true && this.state.error === false){
            RenderedModule = ReportsModule;
      }
      else if(this.state.error !== false && this.state.uploaded === false && this.state.Data===null){
            // alert("here")
            RenderedModule =<Redirect to={{pathname:this.props.match.url+'/ErrorModule'}}/>
      }
    return(
     <React.Fragment>
            {RenderedModule}
            <Route path={this.props.match.url+'/ErrorModule'} exact render={()=>ErrorModule}/>
     </React.Fragment>
    );
};
    


}

export default Payroll;