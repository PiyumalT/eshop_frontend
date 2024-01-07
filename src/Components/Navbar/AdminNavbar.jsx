// AdminNavbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="nav-link">
        <Link to="/admin">Admin Home</Link>
      </div>
      <div className="nav-link dropdown">
        <span>Orders <FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
          <Link to="/admin/orders/pending">Pending Orders</Link>
          <Link to="/admin/orders/completed">Completed Orders</Link>
          <Link to="/admin/orders/canceled">Canceled Orders</Link>
        </div>
      </div>
      <div className="nav-link dropdown">
        <span>Products <FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
          <Link to="/admin/products/manage">Manage Products</Link>
          <Link to="/admin/products/add">Add Product</Link>
        </div>
      </div>
      <div className="nav-link dropdown">
        <span>Categories <FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
          <Link to="/admin/categories/manage">Manage Categories</Link>
          <Link to="/admin/categories/add">Add Category</Link>
        </div>
      </div>
      <div className="nav-link dropdown">
        <span>Users <FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
          <Link to="/admin/users/manage">Manage Users</Link>
          <Link to="/admin/users/add">Add User</Link>
        </div>
      </div>
      <div className="nav-link">
        <Link to="/admin/account">Account</Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
