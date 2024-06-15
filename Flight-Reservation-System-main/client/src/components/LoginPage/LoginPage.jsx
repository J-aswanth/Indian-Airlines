import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import img from './cross_icon.png';

const LoginPage = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('User SignIn');
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const switchToAdminLogin = () => {
    setAdminId("");
    setPassword("");
    setCurrState("Admin Login");
  };

  const switchToUserSignIn = () => {
    setUserName("");
    setUserEmail("");
    setPassword("");
    setCurrState("User SignIn");
  };

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4003/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminId,
        password,
      }),
    });

    const data = await response.json();

    if (data.admin) {
      localStorage.setItem("token", data.admin);
      setShowLogin(false);
      alert("Login successful");
      navigate("/dashboard", {
        state: {
          adminId: adminId,
        },
        
      });

    }
  }

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={img} alt='' />
        </div>
        <div className="login-popup-inputs">
          {currState === "Admin Login" ?
            <>
              <input value={adminId} type="text" placeholder='Admin Id' onChange={(e) => setAdminId(e.target.value)} required />
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            </>
            :
            <>
              <input value={userName} type="text" placeholder='User Name' onChange={(e) => setUserName(e.target.value)} required />
              <input value={userEmail} type="email" placeholder='Your Email' onChange={(e) => setUserEmail(e.target.value)} required />
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            </>
          }
        </div>

        {currState === 'User SignIn' ? <button>Sign In</button> : <button onClick={loginUser}>Login</button>}

        {currState === "Admin Login" ? <></> :
          <div className="condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        }

        {currState === "Admin Login" ?
          <p> Are you a User? <span onClick={switchToUserSignIn}>Sign In Here</span></p>
          : <p> Are you an Admin? <span onClick={switchToAdminLogin}>Click Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPage;
