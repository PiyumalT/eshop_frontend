// AdminHome.jsx
import React from 'react';
import AdminNavbar from '../../Components/Navbar/AdminNavbar';
import './CSS/AdminHome.css';

const AdminHome = () => {
  // Dummy data for illustration, replace with actual data from your API
  const totalOrders = 1254;
  const totalOrderValue = 54321;
  const totalUsers = 356;

  return (
    <div>
      <AdminNavbar />
      <div className="admin-content">
        <h2>Welcome to the Admin Home Page</h2>

        {/* Beautiful section to show total orders, total order value, total users, etc. */}
        <div className="admin-statistics">
          <div className="statistic-box">
            <p className="statistic-number">{totalOrders}</p>
            <p className="statistic-label">Total Orders</p>
          </div>
          <div className="statistic-box">
            <p className="statistic-number">${totalOrderValue}</p>
            <p className="statistic-label">Total Order Value</p>
          </div>
          <div className="statistic-box">
            <p className="statistic-number">{totalUsers}</p>
            <p className="statistic-label">Total Users</p>
          </div>
          {/* Add more statistics boxes as needed */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
