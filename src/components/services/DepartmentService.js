import axios from 'axios';

const DEPARTMENT_API_BASE_URL = 'http://localhost:8080/api/departments';

export const getDepartmentById = (id) =>
  axios.get(`${DEPARTMENT_API_BASE_URL}/${id}`);

export const getDepartments = () => axios.get(DEPARTMENT_API_BASE_URL);

export const addDepartment = (employee) =>
  axios.post(`${DEPARTMENT_API_BASE_URL}/create`, employee);

export const updateDepartment = (id, employee) =>
  axios.put(`${DEPARTMENT_API_BASE_URL}/${id}/update`, employee);

export const deleteDepartment = (id) =>
  axios.delete(`${DEPARTMENT_API_BASE_URL}/${id}/delete`);
