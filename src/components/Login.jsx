import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <main className="login-main">
      <div className="login-board">
        <LoginForm />
        <section className='login-sec right'></section>
      </div>
    </main>
  )
}

export default Login
