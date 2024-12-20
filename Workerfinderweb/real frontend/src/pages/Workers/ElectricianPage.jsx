// src/pages/Workers/ElectricianPage.js
import React from 'react';
import WorkerList from '../../components/WorkerList/WorkerList'; // Import the WorkerList component

const ElectricianPage = () => {
  // Sample list of electricians for display purposes
  const electricians = [
    { name: 'Ramesh Singh', contact: '9812345678', address: 'Sector 10, Gurgaon', experience: '5 years', specialty: 'Pipe installation' },
    { name: 'Suresh Kumar', contact: '9823456789', address: 'Sector 15, Delhi', experience: '3 years', specialty: 'Leak repair' },
    { name: 'Mahesh Verma', contact: '9876543210', address: 'Sector 22, Noida', experience: '6 years', specialty: 'Bathroom fittings' },
    // Add more electricians as needed
  ];

  return (
    <div>
  <h2>Available Electricians</h2>
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
        {electricians.map((electrician, index) => (
          <tr key={index} className="worker-card">
            <td>{electrician.name}</td>
            <td>{electrician.contact}</td>
            <td>{electrician.address}</td>
            <td>{electrician.experience}</td>
            <td>{electrician.specialty}</td>
            <td>
              <button
                onClick={() => window.location.href = `tel:${electrician.contact}`}
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

export default ElectricianPage;
