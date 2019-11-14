import React,{Component} from 'react';
import BulkEmployeeTableRows from './bulkEmployeeTable/BulkEmployeeTableRows';
import classes from './Bulk.module.css'
import Table from 'react-bootstrap/Table';
import TextField from '@material-ui/core/TextField';
import InputSelect from '../../../../../UI/Input/InputSelect'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Bulk extends Component{
    state = {
        employeeDetails: [],
        error: false,
        selectAll: false,
        searchTerm: '',
        searchType:'1'
    }
    componentDidMount(){

        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response =>{
                // console.log(response);
                const data = response.data.slice(0,30);
                // console.log(data);
                const UpdatedEmployeeDetails = data.map(alldata =>{

                    return{
                        ...alldata,
                    checkState: false
                }

                } );
                this.setState ({
                    employeeDetails: UpdatedEmployeeDetails
                })
            });
            // .catch(error => {
            //     // console.log(error);
            //     this.setState({error: true});
            // });
    }
    componentDidUpdate(){
        console.log(this.state.searchType);
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
            console.log(rowId);
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
                if(this.state.searchType == 1){
                    FinalResult = employee.id.toLowerCase().indexOf(this.state.searchTerm.toLowerCase());
                    // console.log('name runs')
                }
                else{
                    FinalResult = employee.employee_name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase());
                    // console.log('id runs')
                }
                // console.log(resultByName,FinalResult)
                return FinalResult !==-1;
            }
        )

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
                        <div >
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.searchType}
                        onChange={this.searchTypeHandler}
                        margin='dense' 
                        variant='outlined'
                        displayEmpty
                        >  
                        {/* <MenuItem value="" default disabled> <em>Select &nbsp; </em></MenuItem>  */}
                        <MenuItem value={1} default>Employee Id &nbsp;</MenuItem>
                        <MenuItem value={2}>Employee Name &nbsp;</MenuItem>
                        </Select>
                    </div>
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
                    <tbody >

                    {Employees }

                    </tbody>
                    
            </Table>
        </div>
        );

        
       


};

}

export default Bulk;