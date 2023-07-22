import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password);
            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }
    


  return (
    <div className='signup-container'>
    <div>
        <h1 className='signup-title'>Sign in to your account</h1>
        <p className='signup-p'>
            Don't have an account yet ? <Link to='/signup'>Sign up.</Link> 
        </p>
    </div>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email Adress</label>
            <input id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button>Sign in</button>
        {error && <p>{error}</p>}
    </form>
    <div>
        <Link to="/forgot-password">Forgot Password?</Link>
    </div>
</div>
  )
}

export default Signin