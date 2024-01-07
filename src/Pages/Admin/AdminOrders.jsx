// AdminPendingOrders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/AdminOrders.css';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../Components/Navbar/AdminNavbar';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        const response = await axios.get('/orders'); // Replace with your actual API endpoint
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    
    <div className="admin-pending-orders">
        <AdminNavbar/>
      <h2>Pending Orders</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="order-box">
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Customer Name:</strong> {order.user.name}</p>
            <p><strong>Order date:</strong>{order.dateOrdered}</p>
            <p><strong>Order status:</strong> {order.status}</p>
            <p><strong>Order total:</strong> ${order.totalPrice}</p>
            <p><strong>Items :</strong> {order.orderItems.map((item_id) => (
                <span> <br/>{item_id} </span>
                ))}</p>
            <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
            {/* Add more order details as needed */}
            <div className="order-options">
              <button className="mark-shipped">Mark Shipped</button>
              <button className="cancel-order">Cancel Order</button>
              <button className="update-status">Update Status</button>
              {/* Add more order options as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOrders;
