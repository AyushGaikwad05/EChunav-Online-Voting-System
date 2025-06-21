import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';

const Results = () => {
  const [candidates, setCandidates] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    axios.get(`${backendURL}/candidate/vote/count`) // Ensure this route returns expected data
      .then(res => {
        console.log(res.data);
        setCandidates(res.data);
      })
      .catch(err => console.error('Error fetching candidates:', err));
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="text-center font-bold text-4xl m-5">Candidates List</h2>

      <div className="m-4 sm:m-8">
        {/* Header */}
        <div className="hidden sm:grid sm:grid-cols-4 bg-gray-200 text-center font-semibold py-3 rounded">
          <div>SR.NO</div>
          <div>Candidate Name</div>
          <div>Party Name</div>
          <div>Vote Count</div>
        </div>

        {/* Data Rows */}
        {candidates.map((candidate, index) => (
          <div
            key={candidate.id || index}
            className="grid grid-cols-2 sm:grid-cols-4 text-center border-b py-2 sm:py-3"
          >
            <div>{index + 1}</div>
            <div>{candidate.name}</div>
            <div className="hidden sm:block">{candidate.party}</div>
            <div className="hidden sm:block">{candidate.count}</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Results;
