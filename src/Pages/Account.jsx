import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/Account.css';

const Account = () => {
    const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     // Fetch user data using axios
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await axios.get('/user/:id');
    //             setUserData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchUserData();
    // }, []);

    const handleLogout = () => {
        // Clear token saved in local storage
        localStorage.removeItem('token');
        // Redirect user back to home page
        window.location.href = '/';

    };

    return (
        <div className="account">
            {!userData && (
                <>
                    <div className="user-info">
                        <div className="user-info-set">
                            <button>Edit</button>
                            <button>Save</button>
                        </div>
                        <div className="user-info">
                            <div className="user-info-set">
                                <p>User ID :</p>
                                <input type="text" disabled placeholder='User ID'/>
                            </div>
                            <div className="user-info-set">
                                <p>Name :</p>
                                <input type="text" disabled placeholder='Name'/>
                            </div>
                            <div className="user-info-set">
                                <p>Email :</p>
                                <input type="text" disabled placeholder='email'/>
                            </div>
                            <div className="user-info-set">
                                <p>Phone :</p>
                                <input type="text" disabled placeholder='phone number'/>
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
