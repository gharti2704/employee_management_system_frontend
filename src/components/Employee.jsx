import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from './services/EmployeeService';

const Employee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');

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

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await addEmployee({ firstName, lastName, email });
        navigate('/employees');
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="card-header text-center">Add Employee</h3>
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
