import React from 'react'
import './css/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsingup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <a href='/'><button>Continue</button></a>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup