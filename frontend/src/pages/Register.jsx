import background from '../assets/images/logo/bannerLogin.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios.js';
function Register() {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance 
            .post('/users/register/', {
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                navigate('/login');
                console.log(res);
                console.log(res.data);
            })
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
            {/* Background Image - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            </div>
            
            {/* Register Form */}
            <div className="w-full md:w-1/2 h-screen bg-white p-4 sm:p-8 md:p-20 flex flex-col">
                <div className="flex items-center justify-start mb-4">
                    <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Back to Home</a>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-1 max-w-md mx-auto w-full">
                    <h1 className="text-3xl md:text-2xl font-bold mb-2">Register</h1>
                    <h2 className="text-sm text-gray-500 mb-8 text-center">Welcome to our website</h2>
                    
                    <form className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                            <input 
                                className="border-2 border-gray-300 rounded-md p-3 focus:border-blue-500 focus:outline-none text-base" 
                                type="text" 
                                id="username" 
                                name="username" 
                                onChange={handleChange}
                                placeholder="Enter your username"
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input 
                                className="border-2 border-gray-300 rounded-md p-3 focus:border-blue-500 focus:outline-none text-base" 
                                type="password" 
                                id="password" 
                                name="password" 
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
                            <input 
                                className="border-2 border-gray-300 rounded-md p-3 focus:border-blue-500 focus:outline-none text-base" 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                onChange={handleChange}
                                placeholder="Confirm your password"
                            />
                        </div>
                        
                        <button 
                            className="bg-blue-500 text-white rounded-md p-3 mt-4 hover:bg-blue-600 transition-colors text-base font-medium" 
                            type="submit" 
                            onClick={handleSubmit}
                        >
                            Register
                        </button>
                    </form>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 text-center">
                        <span className="text-sm text-gray-500">Already have an account?</span>
                        <a href="/login" className="text-blue-500 hover:text-blue-700 font-medium">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;