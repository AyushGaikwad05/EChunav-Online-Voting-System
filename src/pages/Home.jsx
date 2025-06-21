import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const Home = () => {
  const [candidates, setCandidates] = useState([]);
  const [isVoted, setIsVoted] = useState(false);
  const [loading, setLoading] = useState(true);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const voting = async (candidateId) => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Please Login to vote');

    try {
      const res = await axios.post(
        `${backendURL}/candidate/vote/${candidateId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || 'Vote submitted successfully!');
      setIsVoted(true);
    } catch (err) {
      console.error('Error submitting vote:', err);
      alert('Failed to vote. Please try again.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulated delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const candidatesRes = await axios.get(`${backendURL}/candidate/`);
        setCandidates(candidatesRes.data);

        const token = localStorage.getItem('token');
        if (token) {
          const userRes = await axios.get(`${backendURL}/user/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setIsVoted(userRes.data.isVoted);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        <h2 className="font-sans text-3xl font-bold text-center pt-5">Candidates For Election</h2>

        <div className="m-4 sm:m-8 pb-32">
          {loading ? (
            <div className="text-center text-lg text-gray-600 py-10">Loading candidates...</div>
          ) : (
            <>
              <div className="hidden sm:grid sm:grid-cols-5 bg-gray-100 text-center font-semibold py-3 rounded">
                <div>SR.NO</div>
                <div>Candidate Name</div>
                <div>Party Name</div>
                <div>Age</div>
                <div>Action</div>
              </div>

              {candidates.map((candidate, index) => (
                <div
                  key={candidate._id}
                  className="grid grid-cols-1 sm:grid-cols-5 text-center border-b py-4 sm:py-2 gap-2 sm:gap-0"
                >
                  <div><span className="sm:hidden font-semibold">SR.NO: </span>{index + 1}</div>
                  <div><span className="sm:hidden font-semibold">Name: </span>{candidate.name}</div>
                  <div><span className="sm:hidden font-semibold">Party: </span>{candidate.party}</div>
                  <div><span className="sm:hidden font-semibold">Age: </span>{candidate.age}</div>
                  <div>
                    <button
                      onClick={() => voting(candidate._id)}
                      disabled={isVoted}
                      className={`px-4 py-1 rounded text-white ${
                        isVoted ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {isVoted ? 'Already Voted' : 'Vote'}
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
