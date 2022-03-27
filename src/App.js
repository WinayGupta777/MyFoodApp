import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import UserHomePage from './components/UserHomePage';
import { useState } from 'react';
import AddRestaurantPage from './components/AddRestaurantPage';

function App() {
  const [status, setStatus] = useState(false);
  const [GlobalUserName, setGlobalUserName] = useState('');

  const changeStatus=(s,n)=>{
    setStatus(s);
    setGlobalUserName(n);
    console.log("UserStatus chaged to: "+ s);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage status={status} uname={GlobalUserName} />} />
          <Route path="/userhome" element={<UserHomePage status={status} uname={GlobalUserName}/>} />
          <Route path="/register" element={<RegisterPage func={changeStatus} status={status} />} />
          <Route path="/login" element={<LoginPage func={changeStatus} status={status}/>} />
          <Route path="/addrestaurant" element={<AddRestaurantPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
