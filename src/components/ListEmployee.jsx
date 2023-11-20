import { useState } from 'react';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gamil.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@gmail.com' },
    // Add more employees as needed
  ]);

  return (
    <div className="container">
      <h2>Employee List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
