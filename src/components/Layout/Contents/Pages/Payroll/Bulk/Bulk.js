import React,{Component} from 'react';
import BulkEmployeeTableRows from './bulkEmployeeTable/BulkEmployeeTableRows';
import classes from './Bulk.module.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';

class Bulk extends Component{
    state = {
        employeeDetails: [],
        error: false,
        selectAll: false
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
        console.log(this.state);
    }
    
    selectAllHandler=(e) => {
        // const selectAll = { ...this.state.selectAll};
        const temp = [...this.state.employeeDetails];
           
        this.setState({employeeDetails: temp});
        {    
            // console.log('selectAllChecked',data.checkState);
            // const checkState= data.checkState
            // if(e.target.checked){
            //     this.setState({ checkState: true })
            // } 
            // else{
            //     this.setState({ checkState: false })
            // } 
            temp.forEach(temp => temp.checkState = e.target.checked)
            console.log(e.target.checked)
            this.setState({temp: temp})
        }
    }
    individualChangeHandler=(e,id) => {
        console.log(e.target.checked);
        const rowId = this.state.employeeDetails.findIndex(
            p => {
                console.log(p.id)
               return p.id === id
            });
            console.log(rowId);
            const temp = [...this.state.employeeDetails];
            temp[rowId].checkState = e.target.checked;
        this.setState({employeeDetails: temp});
        console.log('hey 2');
    }
render(){
    // console.log(this.state)
   
        let Employees = this.state.employeeDetails.map((alldata, sno) =>
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
                    <th></th>
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