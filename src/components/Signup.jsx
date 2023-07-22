import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password);
            navigate('/account');
        }catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

  return (
    <div className='signup-container'>
        <div>
            <h1 className='signup-title'>Sign up</h1>
            <p className='signup-p'>
                Already have an account yet ? <Link to='/'>Sign in.</Link> 
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
            <button>Sign up</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default Signup