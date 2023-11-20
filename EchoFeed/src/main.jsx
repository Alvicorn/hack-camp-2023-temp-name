import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Onboarding from './Onboarding.jsx'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
)
