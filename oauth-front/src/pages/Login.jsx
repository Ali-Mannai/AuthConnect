import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:3000/auth/google'; // Update for production
    };

    return (
        <div className="login-page">
            <div className="form-container">
                <h1 className="form-title">Welcome Back</h1>
                <p className="form-subtitle">Log in to your account</p>

                <form className="login-form">
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-input"
                        required
                    />
                    <button type="submit" className="form-button">Log In</button>
                </form>

                <div className="divider">
                    <span>OR</span>
                </div>

                <div className="social-login">
                    <button
                        className="social-button google"
                        onClick={handleGoogleLogin}
                    >
                        <FontAwesomeIcon icon={faGoogle} /> Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
