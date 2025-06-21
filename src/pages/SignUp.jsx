import React, { useState } from 'react';
import Logo from './../assets/images/rembg-echunav.png';
import ilr from './../assets/images/voting-illustrations-rbg.png';
import { useNavigate } from 'react-router';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [mobno, setMobno] = useState('');
  const [addr, setAddr] = useState('');
  const [aadharno, setAadharno] = useState('');
  const [error, setError] = useState('');
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const AddUser = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const res = await axios.post(`${backendURL}/user/signup`, {
        name,
        email,
        password,
        age,
        mobileNumber: mobno,
        address: addr,
        aadharCardNumber: aadharno
      });

      console.log('User added:', res.data);
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again. Please Check your details again');
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col lg:flex-row bg-white m-0 overflow-hidden">
      {/* Left: Signup Form */}
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
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Create your account</h2>
          <p className="text-gray-600 text-center mb-6">Fill in your details below</p>

          {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

          <form className="space-y-4" onSubmit={AddUser}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobno}
              onChange={(e) => setMobno(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <textarea
              placeholder="Address"
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              rows={2}
            ></textarea>
            <input
              type="text"
              placeholder="Aadhar Number"
              value={aadharno}
              onChange={(e) => setAadharno(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="w-full bg-[#FED16A] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Sign Up
            </button>

            <p className="mt-6 text-center text-gray-600 text-sm">
              Already have an account?{' '}
              <button
                className="text-sm px-3 py-1 rounded font-semibold text-green-600 hover:underline"
                onClick={() => navigate('/Login')}
              >
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right: Illustration Panel */}
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

export default SignUp;
