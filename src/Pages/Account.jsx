import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/Account.css';

const Account = () => {
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            // Check if token exists in local storage
            const token = localStorage.getItem('token');
            if (!token) {
                // If token doesn't exist, redirect user to sign in page
                window.location.href = '/sign';
            } else {
                // If token exists, set token in axios header
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                // Fetch user data using axios
                try {
                    const response = await axios.get('/users/checktoken');
                    setUserData(response.data);
                } catch (error) {
                    console.error('Error fetching user data:');
                    alert('Your session has expired. Please sign in again.');
                    //clear token in local storage
                    localStorage.removeItem('token');
                    //redirect user to sign in page
                    window.location.href = '/sign';
                }
            }
        };
    
        fetchData();
    }, []);
    

    const handleLogout = () => {
        // Clear token saved in local storage
        localStorage.removeItem('token');
        // Redirect user back to home page
        window.location.href = '/';

    };
    

    return (
        <div className="account">
            {userData && (
                <>
                    <div className="user-info">
                        <div className="user-info-set">
                            <button>Edit</button>
                            <button>Save</button>
                        </div>
                        <div className="user-info">
                            <div className="user-info-set">
                                <p>User ID :</p>
                                <input type="text" disabled placeholder='User ID' value={userData.id}/>
                            </div>
                            <div className="user-info-set">
                                <p>Name :</p>
                                <input type="text" disabled placeholder='Name' value={userData.name}/>
                            </div>
                            <div className="user-info-set">
                                <p>Email :</p>
                                <input type="text" disabled placeholder='email' value={userData.email}/>
                            </div>
                            <div className="user-info-set">
                                <p>Phone :</p>
                                <input type="text" disabled placeholder='phone number' value={userData.phone}/>
                            </div>
                            <div className="user-info-set">
                                <p>Address :</p>
                                <input type="text" disabled placeholder='address details' className='long-text'/>
                            </div>
                        </div>

                    </div>
                    <button onClick={() => handleLogout()}>Logout</button>
                </>
            )}
        </div>
    );
};

export default Account;
