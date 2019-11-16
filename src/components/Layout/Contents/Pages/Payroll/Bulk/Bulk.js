import React,{Component} from 'react';
import BulkEmployeeTableRows from './bulkEmployeeTable/BulkEmployeeTableRows';
import classes from './Bulk.module.css'
import Table from 'react-bootstrap/Table';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

class Bulk extends Component{
    state = {
        employeeDetails: [],
        error: false,
        selectAll: false,
        searchTerm: '',
    }
    componentDidMount(){
        //here the data from dummy API and storing in the data by splicing it from API
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response =>{
                // console.log(response);
                //slice data
                const data = response.data.slice(0,100);
                // console.log(data);
                //making data be duplicted in a variable which can be stored in the state
                const UpdatedEmployeeDetails = data.map(alldata =>{

                    return{
                        ...alldata,
                    checkState: false
                }});
                //set the state using the data stored in the a constant
                this.setState ({
                    employeeDetails: UpdatedEmployeeDetails
                })
            });
            // .catch(error => {
            //     // console.log(error);
            //     this.setState({error: true});
            // });
            //dfghsidfgsdfhggffhfghfd
    }
    componentDidUpdate(){
        // console.log(this.state);
    }
    
    selectAllHandler=(e) => {
        const temp = [...this.state.employeeDetails];
           
        this.setState({employeeDetails: temp}); 
            temp.forEach(temp => temp.checkState = e.target.checked)
            // console.log(e.target.checked)
            this.setState({temp: temp})
    }
    individualChangeHandler=(e,id) => {
        // console.log(e.target.checked);
        const rowId = this.state.employeeDetails.findIndex(
            p => {
                // console.log(p.id)
               return p.id === id
            });
            // console.log(rowId);
            const temp = [...this.state.employeeDetails];
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
render(){
    // console.log(this.state)
    //  the filtering of employees from state based on the input at search box
        const filteredEmployeeDetails = this.state.employeeDetails.filter(
            (employee) => {
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
                    FinalResult = (filteredById + filteredByName + filteredBySalary);

                // console.log(resultByName,FinalResult)
                return FinalResult !==-3;
            }
        )
        // console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
        let Employees = filteredEmployeeDetails.map((alldata, sno) =>
            {
                return <BulkEmployeeTableRows
                        key={alldata.id}
                        sno={sno+1}
                        id={alldata.id} 
                        employeeName={alldata.employee_name} 
                        employeeSalary={alldata.employee_salary}
                        classes={classes}
                        checkedState={alldata.checkState}
                        change={(e) => this.individualChangeHandler(e,alldata.id) }
                         />
            });
            // console.log(Employees)
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
            />
      </div>
            <Table striped bordered hover size="sm"  className={classes.Bulk}>
                    <thead>
                    <tr>
                    
                    <th>S.no</th>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th><input type="checkbox" id="box-1"  onChange={(e) =>{this.selectAllHandler(e)}}/>
                        <label htmlFor="box-1">Select All</label>
                        </th>
                    </tr>
                    </thead>
                   

                    {Employees }

                    
            </Table>
        </div>
        );

        
       


};

}

export default Bulk;