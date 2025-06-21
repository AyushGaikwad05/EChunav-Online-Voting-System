import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';

const Results = () => {
  const [candidates, setCandidates] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios.get(`${backendURL}/candidate/vote/count`)
      .then(res => {
        console.log(res.data);
        setCandidates(res.data);
      })
      .catch(err => console.error('Error fetching candidates:', err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        <h2 className="text-center font-bold text-4xl m-5">Candidates List</h2>

        <div className="m-4 sm:m-8 pb-32">
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
              <div><span className="sm:hidden font-semibold">SR.NO: </span>{index + 1}</div>
              <div><span className="sm:hidden font-semibold">Name: </span>{candidate.name}</div>
              <div className="sm:block hidden">{candidate.party}</div>
              <div className="sm:block hidden">{candidate.count}</div>

              {/* Mobile-only stacked info */}
              <div className="col-span-2 sm:hidden text-sm text-gray-600">
                <div><span className="font-semibold">Party:</span> {candidate.party}</div>
                <div><span className="font-semibold">Votes:</span> {candidate.count}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
