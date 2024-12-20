// src/pages/Workers/CleaningPage.js
import React from 'react';
import WorkerList from '../../components/WorkerList/WorkerList'; // Import the WorkerList component

const CleaningPage = () => {
  // Sample list of cleaners for display purposes
  const cleaners = [
    { name: 'Ramesh Singh', contact: '9812345678', address: 'Sector 10, Gurgaon', experience: '5 years', specialty: 'Pipe installation' },
    { name: 'Suresh Kumar', contact: '9823456789', address: 'Sector 15, Delhi', experience: '3 years', specialty: 'Leak repair' },
    { name: 'Mahesh Verma', contact: '9876543210', address: 'Sector 22, Noida', experience: '6 years', specialty: 'Bathroom fittings' },
    // Add more cleaners as needed
  ];

  return (
    <div>
    <h2>Available Cleaners</h2>
    <div className="worker-list-container">
      <table className="worker-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Experience</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cleaners.map((cleaner, index) => (
            <tr key={index} className="worker-card">
              <td>{cleaner.name}</td>
              <td>{cleaner.contact}</td>
              <td>{cleaner.address}</td>
              <td>{cleaner.experience}</td>
              <td>{cleaner.specialty}</td>
              <td>
                <button
                  onClick={() => window.location.href = `tel:${cleaner.contact}`}
                  className="contact-btn"
                >
                  Call
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default CleaningPage;
