// src/pages/Workers/CarpentryPage.js
import React from 'react';
// import call from '../../logos/call.svg';
import WorkerList from '../../components/WorkerList/WorkerList'; // Import the WorkerList component

const CarpentryPage = () => {
  // Sample list of carpenters for display purposes
  const carpenters = [
    { name: 'Ramesh Singh', contact: '9812345678', address: 'Sector 10, Nanded', experience: '5 years', specialty: 'Furniture Specialist' },
    { name: 'Suresh Kumar', contact: '9823456789', address: 'Sector 15, VishuPuri', experience: '3 years', specialty: 'Door Crafting' },
    { name: 'Mahesh Verma', contact: '9876543210', address: 'Sector 22, ', experience: '6 years', specialty: 'Cupboard Speciality' },
  
  ];

  return (
    <div>
  <h2>Available Carpenters</h2>
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
        {carpenters.map((carpenter, index) => (
          <tr key={index} className="worker-card">
            <td>{carpenter.name}</td>
            <td>{carpenter.contact}</td>
            <td>{carpenter.address}</td>
            <td>{carpenter.experience}</td>
            <td>{carpenter.specialty}</td>
            <td>
              <button
                onClick={() => window.location.href = `tel:${carpenter.contact}`}
                className="contact-btn"
              >
                <img src={call} alt='call'/>
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

export default CarpentryPage;
