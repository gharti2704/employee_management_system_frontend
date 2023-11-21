import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employee/all';
const EMPLOYEE_API_ADD_URL = 'http://localhost:8080/api/employee/create';

export const getEmployees = () => axios.get(EMPLOYEE_API_BASE_URL);
export const addEmployee = (employee) =>
  axios.post(EMPLOYEE_API_ADD_URL, employee);
