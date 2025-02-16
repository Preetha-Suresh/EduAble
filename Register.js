import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4">Register</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="block w-full mb-4 p-2 border rounded"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full mb-4 p-2 border rounded"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full mb-4 p-2 border rounded"
                    onChange={handleChange}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
