import background from '../assets/images/logo/bannerLogin.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios.js';
function Login() {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        username: '',
        password: '',
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
            .post('token/', {
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] = `JWT ${res.data.access}`;
                navigate('/');
            })
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            </div>
            <div className="w-1/2 h-full bg-white p-20">
                <div className="flex items-center justify-start">
                    <a href="/" className="text-sm text-gray-500">Back to Home</a>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <h2 className="text-sm text-gray-500">Welcome back to our website</h2>
                    <form className="flex flex-col gap-2 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="username">Username</label>
                            <input className="border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none" type="text" id="username" name="username" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <input className="border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none" type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="remember" name="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-blue-500">Forgot password?</a>
                        </div>
                        <button className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600" type="submit" onClick={handleSubmit}>Login</button>
                    </form>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <label className="text-sm text-gray-500">Don't have an account?</label>
                        <a href="/register" className="text-blue-500">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;