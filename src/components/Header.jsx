import PropTypes from 'prop-types';

export const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          Employee Management System
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/employees"
              >
                Employees
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/departments"
              >
                Departments
              </a>
            </li>
          </ul>
          <form className="d-flex" role="sear">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by first name"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => {
                e.preventDefault();
                setSearchTerm(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
