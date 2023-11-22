import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addEmployee,
  getEmployeeById,
  updateEmployee,
} from '../services/EmployeeService';
import { getDepartments } from '../services/DepartmentService';
import './Employee.css';

const Employee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [departmentError, setDepartmentError] = useState('');
  const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const validateForm = () => {
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError('First name is required');
      isValid = false;
    }

    if (!lastName.trim()) {
      setLastNameError('Last name is required');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!departmentId.trim()) {
      setDepartmentError('Department is required');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstName, lastName, email, departmentId };
      try {
        id ? await updateEmployee(id, employee) : await addEmployee(employee);
        navigate('/employees');
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setDepartmentId(response.data.departmentId);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [id]);

  useEffect(() => {
    getDepartments()
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="card-header text-center">
            {id ? 'Update Employee' : 'Add Employee'}
          </h3>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  className={`form-control ${firstNameError && 'is-invalid'}`}
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                />
                {firstNameError && (
                  <div className="text-danger">{firstNameError}</div>
                )}
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  className={`form-control ${lastNameError && 'is-invalid'}`}
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                />
                {lastNameError && (
                  <div className="text-danger">{lastNameError}</div>
                )}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className={`form-control ${emailError && 'is-invalid'}`}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
              <div className="form-group">
                <label>Select Department:</label>
                <br />
                <div className="select-wrapper">
                  <select
                    className={`form-control ${
                      departmentError && 'is-invalid'
                    }`}
                    name="department"
                    value={departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                  >
                    <option value="Select Department">Select department</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {departmentError && (
                  <div className="text-danger">{departmentError}</div>
                )}
              </div>
              <br />
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
