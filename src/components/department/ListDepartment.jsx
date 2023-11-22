import { useNavigate } from 'react-router-dom';
const ListDepartment = () => {
  const navigate = useNavigate();
  const departments = [
    { id: 1, name: 'Department 1', description: 'Description 1' },
    { id: 2, name: 'Department 2', description: 'Description 2' },
    { id: 3, name: 'Department 3', description: 'Description 3' },
  ];

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
                  // onClick={() => removeDepartment(department.id)}
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

export default ListDepartment;
