import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user', { withCredentials: true });
                setToken(response.data.token);
            } catch (error) {
                console.error('Error fetching token:', error);
                window.location.href = '/'; // Redirect to login on error
            }
        };
        fetchToken();
    }, []);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
        fontSize: '36px',
        marginBottom: '20px',
        color: '#333',
    };

    const messageStyle = {
        fontSize: '18px',
        color: '#4CAF50',
        fontWeight: 'bold',
    };

    const loadingStyle = {
        fontSize: '18px',
        color: '#888',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Dashboard</h1>
            {token ? (
                <p style={messageStyle}>You are logged in with Google</p>
            ) : (
                <p style={loadingStyle}>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
