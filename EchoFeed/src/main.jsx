import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
    </Routes>
  </BrowserRouter>
)
