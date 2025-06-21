import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Logo from './../assets/images/rembg-echunav.png';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Optional Navbar */}
      {/* <Navbar /> */}

      <main className="flex-grow bg-gray-50 px-4 sm:px-8 py-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo */}
       

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Welcome to the Smart Online Voting System
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            This platform is designed to make your voting experience secure, transparent, and simple. You can log in, view candidates, and cast your vote in just a few clicks!
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/result')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow"
            >
              View Result
            </button>

            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
            >
              Login
            </button>
          </div>

          {/* About Section */}
          <div className="mt-12 text-left bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About This Project</h2>
            <p className="text-gray-700 mb-4">
              Our online voting system ensures a fair and tamper-proof election process. Built with modern web technologies like <strong>React.js, Node.js, MongoDB, and JWT Authentication</strong>, it provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Secure login and voter authentication</li>
              <li>Real-time vote submission</li>
              <li>One-person one-vote guarantee</li>
              <li>Role-based access for admins and voters</li>
              <li>Simple and mobile-friendly UI</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Landing;
