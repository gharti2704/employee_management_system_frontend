import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from './services/EmployeeService';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

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
      <button
        className="btn btn-primary mb-2"
        onClick={() => navigate('/add-employee')}
      >
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-success mr-2"
                  onClick={() => navigate(`/update-employee/${employee.id}`)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => navigate(`/delete-employee/${employee.id}`)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
