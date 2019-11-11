import React,{Component} from 'react';
import BulkEmployeeTableRows from './bulkEmployeeTable/BulkEmployeeTableRows';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

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
   
        let Employees = this.state.employeeDetails.map(alldata =>
            {
                return <BulkEmployeeTableRows
                         key={alldata.id}
                         id={alldata.id} 
                         employeeName={alldata.employee_name} 
                         employeeSalary={alldata.employee_salary}
                         />
            });
            console.log(Employees)
    return(

        <div>
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