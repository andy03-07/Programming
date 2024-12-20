// src/pages/Workers/PlumbingPage.js
import React from 'react';
import WorkerList from '../../components/WorkerList/WorkerList'; // Import the WorkerList component

const PlumbingPage = () => {
  // Sample list of plumbers for display purposes
  const plumbers = [
    { name: 'Ramesh Singh', contact: '9812345678', address: 'Sector 10, Loha', experience: '5 years', specialty: 'Pipe installation' },
    { name: 'Suresh Kumar', contact: '9823456789', address: 'Sector 15, Vajirabad', experience: '3 years', specialty: 'Leak repair' },
    { name: 'Mahesh Verma', contact: '9876543210', address: 'Sector 22, Monda', experience: '6 years', specialty: 'Bathroom fittings' },
    // Add more plumbers as needed
  ];

  return (
    <div>
  <h2>Available Plumbers</h2>
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
        {plumbers.map((plumber, index) => (
          <tr key={index} className="worker-card">
            <td>{plumber.name}</td>
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
    </table>
  </div>
</div>
  );
};

export default PlumbingPage;
