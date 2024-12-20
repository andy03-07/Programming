// src/pages/Workers/PlumbingPage.js
import React from 'react';

const PaintingPage = () => {
  // Sample list of painters for display purposes
  const painters = [
    { name: 'Ramesh Singh', contact: '9812345678', address: 'Sector 10, Gurgaon', experience: '5 years', specialty: 'Pipe installation' },
    { name: 'Suresh Kumar', contact: '9823456789', address: 'Sector 15, Delhi', experience: '3 years', specialty: 'Leak repair' },
    { name: 'Mahesh Verma', contact: '9876543210', address: 'Sector 22, Noida', experience: '6 years', specialty: 'Bathroom fittings' },
    // Add more painters as needed
  ];

  return (
    <div>
    <h2>Available Painters</h2>
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
          {painters.map((painter, index) => (
            <tr key={index} className="worker-card">
              <td>{painter.name}</td>
              <td>{painter.contact}</td>
              <td>{painter.address}</td>
              <td>{painter.experience}</td>
              <td>{painter.specialty}</td>
              <td>
                <button
                  onClick={() => window.location.href = `tel:${painter.contact}`}
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

export default PaintingPage;
