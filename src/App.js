import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import About from "./pages/About";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Header from "./pages/Header";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="page-content">
          <Routes>
            <Route path="/pages/home" element={<Home />} />
            <Route path="/pages/employee" element={<Employee />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;