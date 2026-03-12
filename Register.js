import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card register-card">
        <div className="auth-header">
          <h1>Spendwise</h1>
          <p>Your Expense Tracker</p>
        </div>

        <div className="register-options">
          <h2>Get Started</h2>
          <p className="register-subtitle">Choose how you would like to proceed</p>

          <div className="option-buttons">
            <button
              onClick={() => navigate('/login')}
              className="option-btn login-btn"
            >
              <span className="option-icon">🔓</span>
              <span className="option-text">
                <strong>Already have an account?</strong>
                <small>Login to your existing account</small>
              </span>
            </button>

            <button
              onClick={() => navigate('/signup')}
              className="option-btn signup-btn"
            >
              <span className="option-icon">✨</span>
              <span className="option-text">
                <strong>Create New Account</strong>
                <small>Sign up and start tracking expenses</small>
              </span>
            </button>
          </div>

          <div className="register-features">
            <h3>Why Choose Spendwise?</h3>
            <ul>
              <li>✓ Easy expense tracking</li>
              <li>✓ Detailed financial reports</li>
              <li>✓ Budget management tools</li>
              <li>✓ Secure data encryption</li>
              <li>✓ Multi-device access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
