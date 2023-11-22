import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import { Header } from './components/Header';
import ListEmployee from './components/employee/ListEmployee';
import Employee from './components/employee/Employee';
import ListDepartment from './components/department/ListDepartment';
import Department from './components/department/Department';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <BrowserRouter>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path="/"
            element={<ListEmployee searchTerm={searchTerm} />}
          ></Route>
          <Route
            path="/employees"
            element={<ListEmployee searchTerm={searchTerm} />}
          ></Route>
          <Route path="/add-employee" element={<Employee />}></Route>
          <Route path="/update-employee/:id" element={<Employee />}></Route>
          <Route
            path="/departments"
            element={<ListDepartment searchTerm={searchTerm} />}
          ></Route>
          <Route path="/add-department" element={<Department />}></Route>
          <Route path="/update-department/:id" element={<Department />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
