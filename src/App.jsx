import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import { Header } from './components/Header';
import ListEmployee from './components/ListEmployee';
import Employee from './components/Employee';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
