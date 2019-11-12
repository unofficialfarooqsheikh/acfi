import React,{Component} from 'react';
import BulkEmployeeTableRows from './bulkEmployeeTable/BulkEmployeeTableRows';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Search from './Search/Search'

class Bulk extends Component{
    state = {
        employeeDetails: [],
        error: false
    }
    componentDidMount(){

        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response =>{
                console.log(response);
                const data = response.data;
                console.log(data);
                const UpdatedEmployeeDetails = data.map(alldata =>{

                    return{
                        ...alldata
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
    // SelectAllHandler = () =>{
    //   
    //         console.log(Employees);
    //   
            
    //     )
    // }
render(){
    console.log(this.state.employeeDetails)
   
        let Employees = this.state.employeeDetails.map( (alldata,i) =>
            {
                return <BulkEmployeeTableRows
                         key={alldata.id}
                         id={alldata.id} 
                         index={i+1}
                         employeeName={alldata.employee_name} 
                         employeeSalary={alldata.employee_salary}
                         />
            });
            console.log(Employees)
    return(

        <div>
                <Search /> 
                <h3 style={{display:"inline"}}>Pay roll for the month of:</h3><h3 style={{display:"inline"}}>Month_Name</h3>
                <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                        <th><input type='checkbox' 
                        // onClick={SelectAllHandler}
                        />Tick</th>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                        <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {Employees }

                        </tbody>
                        
                </Table>
        </div>
        );

        
       


};

}

export default Bulk;