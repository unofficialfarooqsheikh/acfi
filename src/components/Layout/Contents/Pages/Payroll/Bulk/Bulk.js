import React,{Component} from 'react';
import BulkEmployeeTableRows from './bulkEmployeeTable/BulkEmployeeTableRows';
import classes from './Bulk.module.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import ExpandedEmployeeDetails from './bulkEmployeeTable/ExpandedEmployeeDetails';
import Skeleton from 'react-loading-skeleton';


class Bulk extends Component{
    state = {
        employeeDetails: [],
        loading: true,
        error: false,
        selectAll: false,
        searchTerm: '',
        individualEmployee: false,
        individualEmployeeId: null,
        individualEmployeeData: null,
        month: 'None',
        lop: null
    }
    componentDidMount(){
        //here the data from dummy API and storing in the data by splicing it from API
        // alert(sessionStorage.getItem('Token'))
        const data = this.props.Data;
                console.log(data);
                //making data be duplicted in a variable which can be stored in the state
                const UpdatedEmployeeDetails = data.map(alldata =>{
                    console.log(alldata)
                    return{
                        ...alldata,
                    checkState: false
                }
            });
                //set the state using the data stored in the a constant
                this.setState ({
                    employeeDetails: UpdatedEmployeeDetails,
                    loading: false
                })
            // .catch(error => {
            //     // console.log(error);
            //     this.setState({error: true});
            // });
            //dfghsidfgsdfhggffhfghfd
        const date = new Date();
        var month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        const Month = month[date.getMonth()]
        // console.log(Month)
        this.setState({month: Month});
        console.log(this.state)
    }
    
    
    selectAllHandler=(e) => {
        const temp = [...this.state.employeeDetails];
           
        this.setState({employeeDetails: temp}); 
            temp.forEach(temp => temp.checkState = e.target.checked)
            console.log(e.target.checked)
            this.setState({temp: temp})
    }
    individualChangeHandler=(e,id) => {
        // console.log(e.target.checked);
        const rowId = this.state.employeeDetails.findIndex(
            p => {
                console.log(p.id,id)
               return p.id === id
            });
            // console.log(rowId);
            const temp = [...this.state.employeeDetails];
            console.log(temp[rowId]);
            temp[rowId].checkState = e.target.checked;
        this.setState({employeeDetails: temp});
        // console.log('hey 2');
    }
    searchHandler = (e) => {
        this.setState({searchTerm: e.target.value})
        // console.log(this.state.searchTerm)
    }
    searchTypeHandler = (e) => {
        this.setState({searchType:e.target.value})
        // console.log(e.target.value)
    }
    individualEmployeeHandler =(e,id) =>{
        const indEmployee=this.state.individualEmployee
        console.log(e,id);
        this.setState({individualEmployee: !(indEmployee),
                       individualEmployeeData:this.state.employeeDetails[id],
                       individualEmployeeId: id })
        // console.log(this.state)
    }
    confirmHandler=()=>{
        if(this.state.selectAll){
            alert("Working in select all")
        }
        else{
            alert("Select ALL is  False Bro!!"+this.state.selectAll)
        }
    }
render(){
    // console.log(this.props)
    //  the filtering of employees from state based on the input at search box
        const filteredEmployeeDetails =this.state.employeeDetails.filter(
            (employee) => {
                console.log(employee.employee_salary)
                let FinalResult;
                let filtersearch=(a) => {
                    if(a >= 0)
                    {
                        return 0
                    }
                    else if(a < 0)
                    {
                        return -1
                    }}
                    let filteredById = filtersearch(employee.id.indexOf(this.state.searchTerm));
                    // console.log('name runs')
                    // console.log('employee.employee_id',employee.id)
                    // console.log('employee.employee_name',employee.employee_name)
                    // console.log('employee.employee_name index of',(employee.id.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) ) )
                    let filteredByName = filtersearch(employee.employee_name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()));
                    let filteredBySalary = filtersearch(employee.employee_salary.indexOf(this.state.searchTerm));
                    if(!this.state.individualEmployee)
                    {
                        FinalResult = (filteredById + filteredByName + filteredBySalary);
                    }
                // console.log(resultByName,FinalResult)
                return FinalResult !==-3;
            }
        )
        // console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
        let Employees;
        let ExpandedEmployee;
        if(!this.state.individualEmployee){
         Employees = filteredEmployeeDetails.map((alldata, sno) =>
        {
            return <BulkEmployeeTableRows
                    key={alldata.id}
                    sno={sno+1}
                    id={alldata.id} 
                    ExpandHandler={(e)=>this.individualEmployeeHandler(e,sno)}
                    employeeData = {alldata}
                    employeeName={alldata.employee_name} 
                    employeeSalary={alldata.employee_salary}
                    classes={classes}
                    checkedState={alldata.checkState}
                    change={(e) => this.individualChangeHandler(e,alldata.id) }
                     />
        });
        ExpandedEmployee = null;
       }
       else{
            // console.log(Employees)
            const individualEmployeedata = this.state.individualEmployeeData;
            Employees = (
            
            <BulkEmployeeTableRows
                sno={1}
                id={individualEmployeedata.id} 
                ExpandHandler={(e)=>this.individualEmployeeHandler(e,individualEmployeedata.id)}
                employeeData = {individualEmployeedata}
                change={(e) => this.individualChangeHandler(e,individualEmployeedata.id) }
                />);
                ExpandedEmployee= (<ExpandedEmployeeDetails employeeNumber={this.state.individualEmployeeData.id}
                    employeeName={this.state.individualEmployeeData.employee_name} 
                    employeeData = {individualEmployeedata}
                        />);
       }

        let employeesWithLoading = (this.state.loading === true) ? null : Employees;
        let Skeletons = (this.state.loading === true) ? <Skeleton  count={18} height={25} width={'99vw'}/>: null;
        let CancelConfirmButtons = (ExpandedEmployee === null) ?<div className={classes.CancelConfirmButtons}>
        <Button>Cancel</Button>
        <Button onClick={this.confirmHandler}>Confirm</Button>
    </div> : null;
        return(

        <div>
            
            <div className={classes.margin}>
                    <SearchIcon />
                    <TextField 
                        margin='dense' 
                        variant='outlined'
                        fullWidth 
                        id="input-with-icon-grid"
                        label="Your Search Starts here" 
                        onChange={this.searchHandler}
                        disabled={this.state.individualEmployee}
                    />
            </div>
<div style={{display:'flex',alignItems:'center'}}><h5 className={classes.headingsInline}>Pay Roll for the month of : {" "}</h5><h2 className={classes.headingsInline}>{this.state.month}</h2></div>
            <Table bordered hover size="sm"  className={classes.Bulk}>
                    <thead>
                    <tr>
                    
                    <th>S.no</th> 
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gross Salary</th>
                    <th>LOP</th>
                    <th>Current Gross</th>
                    <th>Additional Payments</th>
                    <th>Deductions</th>
                    <th><input type="checkbox" id="box-1"  onChange={(e) =>{this.selectAllHandler(e)}}/>
                        <label htmlFor="box-1">Select All</label>
                        </th>
                    </tr>
                    </thead>
                    

                    <tbody>{employeesWithLoading }</tbody>
            </Table>
            {Skeletons}
            {ExpandedEmployee}
            {CancelConfirmButtons}
            
        </div>
        );

        
       


};

}

export default Bulk;