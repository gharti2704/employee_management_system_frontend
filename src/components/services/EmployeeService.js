import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees';
const EMPLOYEE_API_ADD_URL = `${EMPLOYEE_API_BASE_URL}/create`;
const EMPLOYEE_API_UPDATE_URL = (id) => `${EMPLOYEE_API_BASE_URL}/${id}/update`;
const EMPLOYEE_API_GET_BY_ID_URL = (id) => `${EMPLOYEE_API_BASE_URL}/${id}`;

export const getEmployeeById = (id) =>
  axios.get(EMPLOYEE_API_GET_BY_ID_URL(id));

export const getEmployees = () => axios.get(EMPLOYEE_API_BASE_URL);

export const addEmployee = (employee) =>
  axios.post(EMPLOYEE_API_ADD_URL, employee);

export const updateEmployee = (id, employee) =>
  axios.put(EMPLOYEE_API_UPDATE_URL(id), employee);
