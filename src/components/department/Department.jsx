import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addDepartment,
  getDepartmentById,
  updateDepartment,
} from '../services/DepartmentService';

const Department = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const validateForm = () => {
    let isValid = true;
    setNameError('');
    setDescriptionError('');

    if (!name.trim()) {
      setNameError('Department name is required');
      isValid = false;
    }

    if (!description.trim()) {
      setDescriptionError('Description is required');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const Department = { name, description };
      try {
        id
          ? await updateDepartment(id, Department)
          : await addDepartment(Department);
        navigate('/departments');
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (id) {
      getDepartmentById(id)
        .then((response) => {
          setName(response.data.name);
          setDescription(response.data.description);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [id]);

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="card-header text-center">
            {id ? 'Update Department' : 'Add Department'}
          </h3>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  className={`form-control ${nameError && 'is-invalid'}`}
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter department name"
                />
                {nameError && <div className="text-danger">{nameError}</div>}
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input
                  type="text"
                  className={`form-control ${descriptionError && 'is-invalid'}`}
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                />
                {descriptionError && (
                  <div className="text-danger">{descriptionError}</div>
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

export default Department;
