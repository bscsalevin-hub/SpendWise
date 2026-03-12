import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('spendwise_currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('spendwise_currentUser');
    navigate('/login');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h1>💰 Spendwise</h1>
        </div>
        <div className="nav-user">
          <span>Welcome, {currentUser.firstName}!</span>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-container">
        <div className="welcome-section">
          <h2>Welcome to Your Expense Tracker, {currentUser.firstName}!</h2>
          <p>Manage and track your expenses with ease</p>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <h3>💳 Add Expense</h3>
            <p>Record a new expense transaction</p>
            <button className="btn-action">Add Expense</button>
          </div>

          <div className="card">
            <h3>📊 View Reports</h3>
            <p>Analyze your spending patterns</p>
            <button className="btn-action">View Reports</button>
          </div>

          <div className="card">
            <h3>🏦 Wallet</h3>
            <p>Manage your accounts and balance</p>
            <button className="btn-action">Manage Wallet</button>
          </div>

          <div className="card">
            <h3>⚙️ Settings</h3>
            <p>Update your account preferences</p>
            <button className="btn-action">Go to Settings</button>
          </div>
        </div>

        <div className="user-info">
          <h3>Your Profile Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Name:</label>
              <p>{currentUser.firstName} {currentUser.lastName}</p>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <p>{currentUser.email}</p>
            </div>
            <div className="info-item">
              <label>Phone:</label>
              <p>{currentUser.phone || 'Not provided'}</p>
            </div>
            <div className="info-item">
              <label>Address:</label>
              <p>{currentUser.address || 'Not provided'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
