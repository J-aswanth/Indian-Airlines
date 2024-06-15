
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './components/AdminLogin/AdminLogin';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import SearchFlights from './components/SearchFlights/SearchFlights';
import Passenger from './components/Passenger/Passenger';
import Ticket from './components/Ticket/Ticket';
import { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPage setShowLogin={setShowLogin} />: <></>}

    <div className="app">

      <BrowserRouter>
        <Routes>
          
          <Route path="/"  element={<Home setShowLogin={setShowLogin}/>} />
          <Route path="/searchflights"  element={<SearchFlights/>} />
          <Route path="/booking"  element={<Passenger/>} />
          <Route path="/adminlogin"  element={<AdminLogin/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
          {/* <Route path="/ticket"  element={<Ticket/>} /> */}
          <Route path="/ticket"  element={<Ticket/>} />
          
        </Routes>

      </BrowserRouter>
    </div>

    </>
  );
}

export default App;
