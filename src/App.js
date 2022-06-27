import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
