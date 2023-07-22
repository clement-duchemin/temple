import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    //const navigate =  useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Check your inbox for further instructions');
            //navigate.push("/")
        } catch (e) {
            setError('Failed to reset password. Make sure your email is correct');
        }
    }

    return (
        <div className='reset-password-container'>
            <h1 className='reset-password-title'>Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button>Reset password</button>
                {error && <p>{error}</p>}
                {message && <p>{message}</p>}
            </form>
            <div>
                <Link to='/'>Sign in</Link>
            </div>
        </div>
    )
}

export default ForgotPassword;