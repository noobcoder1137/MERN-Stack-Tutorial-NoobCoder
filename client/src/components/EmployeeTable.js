import React from 'react';
import EmployeeTableRow from './EmployeeTableRow';

const EmployeeTable = (props)=>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
               {props.employees.map(employee=>{
                   return <EmployeeTableRow key={employee._id}
                                            employee={employee}
                                            deleteHandler={props.deleteHandler}
                                            showEditForm={props.showEditForm}/>
               })}
            </tbody>
        </table>
    )
}

export default EmployeeTable;