import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import UserHomePage from './components/UserHomePage';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(false);

  const changeStatus=(s)=>{
    setStatus(s);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage status={status} />} />
          <Route path="/userhome" element={<UserHomePage />} />
          <Route path="/register" element={<RegisterPage func={changeStatus} />} />
          <Route path="/login" element={<LoginPage func={changeStatus} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
