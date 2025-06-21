import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate=useNavigate();
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {  
          alert('Please login.');
        navigate('/login'); 
        return;
       }
        
        const res = await axios.get(`${backendURL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(res.data.user);
      } catch (error) {
        console.error('Error fetching profile:', error.response?.data || error.message);
        alert('Failed to load profile.');
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Age:</span>
              <span>{user.age}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Gender:</span>
              <span>{user.gender}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Aadhar Number:</span>
              <span>{user.aadharCardNumber}</span>
            </div>
              <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Voting Status:</span>
              <span>{user.isVoted?"Voted ✅" : "Not Voted ❌"}</span>
            </div>
          </div>

          <div className="mt-8 text-center flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button onClick={()=>alert('Coming Soon!')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Change Password
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded"
              onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
