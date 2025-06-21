import React, { useState } from 'react';
import Logo from './../assets/images/rembg-echunav.png';
import ilr from './../assets/images/voting-illustrations-rbg.png';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

  const [aadhar, setAadhar] = useState('')
  const [pass, setPass] = useState('');
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const loginuser = async (e) => {
  e.preventDefault();
    try {
      const res = await axios.post(`${backendURL}/user/login`, {
        aadharCardNumber:aadhar,
        password:pass
      })
      console.log('User login:', res.data);
      alert('Login Successful!');
      navigate('/candidates');
       localStorage.setItem('token', res.data.token);
    }
    catch (err) {
    console.error('Login Error:', err.response?.data || err.message);
      alert('Login Failed');
    }

  }



  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-screen flex flex-col lg:flex-row bg-white m-0 overflow-hidden">
      {/* Left: Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-10 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={Logo}
              alt="eChunav Logo"
              className="h-40 w-40 rounded-full object-contain"
            />
          </div>

          {/* Welcome Text */}
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Welcome back!</h2>
          <p className="text-gray-600 text-center mb-6">Please enter your details</p>

          {/* Login Form */}
          <form>
            <div className="mb-4">
              <label htmlFor="aadhar" className="block text-gray-700 text-sm font-medium mb-2">
                Aadhar Number
              </label>
              <input
                type="text"
                id="aadhar"
                value={aadhar}
                onChange={(e)=>setAadhar(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your Aadhar Number"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your password"
              />
            </div>

            <button onClick={loginuser} className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300">
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{' '}
            <button
              className="text-sm px-3 py-1 rounded font-semibold" onClick={() => navigate('/Signup')}
              style={{ backgroundColor: '#FED16A' }}
            >
              Sign up
            </button>
          </p>

        </div>
      </div>

      {/* Right: Orange Image Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-orange-500 items-center justify-center shadow-2xl">
        <img
          src={ilr}
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
