import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    let navigate = useNavigate()
  return (
    <section className="login-sec left">
      <div className="login-form-con">
        <h1>Register</h1>
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
            Register
          </button>
        </form>
        <span>
          {' '}
          Already have an account? <a onClick={()=> navigate('/login')}>Login</a>
        </span>
      </div>
    </section>
  )
}

export default RegisterForm
