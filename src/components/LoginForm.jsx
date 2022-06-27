import React from 'react'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
  let navigate = useNavigate()
  return (
    <section className="login-sec left">
      <div className="login-form-con">
        <h1>Login</h1>
        <form>
          <div className="input-container">
            <label htmlFor="username">USERNAME</label>
            <input type="text" id="username" />
          </div>
          <div className="input-container">
            <label htmlFor="password">PASSWORD</label>
            <input type="text" id="password" />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        <span>
          {' '}
          Don't have an account? <a onClick={()=> navigate('/register')}>Register</a>
        </span>
      </div>
    </section>
  )
}

export default LoginForm
