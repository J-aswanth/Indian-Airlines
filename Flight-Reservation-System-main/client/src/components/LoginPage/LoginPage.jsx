import React, { useState } from 'react'
import './LoginPage.css';
import img from './cross_icon.png';

const LoginPage = ({setShowLogin}) => {

  const [currState,setCurrState] = useState('User SignIn');

  return (
    <div className='login-popup'> 
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)} src={img} alt= '' />
        </div>
        <div className="login-popup-inputs">
          {currState==="Admin Login"? <input type="text"  placeholder='Admin Id' required/>: <input type="text"  placeholder='User Name' required/> }
          {currState ==="Admin Login"? <></>:<input type="email" placeholder='Your Email' required />}
          <input type="password"  placeholder='Password' required/>
        </div>
        <button>{currState === 'User SignIn'? 'Sign In': 'Login'}</button>
       
        {currState === "Admin Login"?<></> :
        
       
        <div className="condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        }

        {currState === "Admin Login"? <p> Are you a User? <span onClick={()=> setCurrState('User SignIn')}>Sign In Here</span></p>
         :  <p> Are you an Admin? <span onClick={()=> setCurrState('Admin Login')}>Click Here</span></p>

        }

      </form>
    </div>


  )
}

export default LoginPage
