import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import Signup from './components/Signup';
import Signin from './components/Signin';
import ForgotPassword from './components/ForgotPassword';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <h1 className="main-title">
        Firebase auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path='/forgot-password' element={<ForgotPassword />}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
