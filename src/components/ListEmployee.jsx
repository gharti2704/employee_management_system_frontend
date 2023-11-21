import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from './services/EmployeeService';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const addNewEmployee = () => {
    navigate('/add-employee');
  };

  useEffect(() => {
    try {
      getEmployees().then((response) => setEmployees(response.data));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Employee List</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
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
