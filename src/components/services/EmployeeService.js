import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees';

export const getEmployeeById = (id) =>
  axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);

export const getEmployees = () => axios.get(EMPLOYEE_API_BASE_URL);

export const addEmployee = (employee) =>
  axios.post(`${EMPLOYEE_API_BASE_URL}/create`, employee);

export const updateEmployee = (id, employee) =>
  axios.put(`${EMPLOYEE_API_BASE_URL}/${id}/update`, employee);
