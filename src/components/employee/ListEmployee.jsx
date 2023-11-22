import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEmployees, deleteEmployee } from '../services/EmployeeService';

const ListEmployee = ({ searchTerm }) => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const removeEmployee = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await deleteEmployee(id);
        setEmployees(employees.filter((employee) => employee.id !== id));
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const filteredEmployees = employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filteredEmployees);
      setEmployees(filteredEmployees);
    } else {
      try {
        getEmployees().then((response) => setEmployees(response.data));
      } catch (error) {
        console.error(error.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee List</h2>
      <button
        className="btn btn-info mb-2"
        onClick={() => navigate('/add-employee')}
      >
        Add Employee
      </button>
      <table className="table table-striped table-bordered text-center">
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
                  className="btn btn-info"
                  onClick={() => navigate(`/update-employee/${employee.id}`)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => removeEmployee(employee.id)}
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

ListEmployee.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default ListEmployee;
