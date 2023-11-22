import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getDepartments,
  deleteDepartment,
} from '../services/DepartmentService';

const ListDepartment = ({ searchTerm }) => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const removeDepartment = async (id) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      try {
        await deleteDepartment(id);
        setDepartments(
          departments.filter((department) => department.id !== id)
        );
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const filteredDepartments = departments.filter((department) =>
        department.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDepartments(filteredDepartments);
    } else {
      try {
        getDepartments().then((response) => setDepartments(response.data));
      } catch (error) {
        console.error(error.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Department List</h2>
      <button
        className="btn btn-info mb-2"
        onClick={() => navigate('/add-department')}
      >
        Add Department
      </button>
      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>{department.description}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() =>
                    navigate(`/update-department/${department.id}`)
                  }
                >
                  Update
                </button>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => removeDepartment(department.id)}
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

ListDepartment.propTypes = {
  searchTerm: PropTypes.string,
};

export default ListDepartment;
