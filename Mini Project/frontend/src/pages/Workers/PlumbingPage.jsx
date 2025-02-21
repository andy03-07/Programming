import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styles/WorkerList.css';

const PlumbingPage = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getplumber/all');
      setWorkers(response.data);
    } catch (error) {
      console.error('Error fetching plumbing workers:', error);
    }
  };

  return (
    <div>
      <h2>Available Plumbers</h2>
      <div className="worker-list-container">
        {workers.length > 0 ? (
        <table className="worker-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Experience (years)</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((plumber, index) => (
              <tr key={index} className="worker-card">
                <td>{plumber.workername}</td>
                <td>{plumber.contact}</td>
                <td>{plumber.address}</td>
                <td>{plumber.experience}</td>
                <td>{plumber.specialty}</td>
                <td>
                  <button
                    onClick={() => window.location.href = `tel:${plumber.contact}`}
                    className="contact-btn"
                  >
                    Call
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> ) :
        (
          <p className="admin-no-workers">No painters available.</p> 
        )}
      </div>
    </div>
  );
};

export default PlumbingPage;
