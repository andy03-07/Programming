// src/pages/Admin/AdminCarpentryPage.js
import React, { useState } from 'react';

const AdminCarpentryPage = () => {
  const [workers, setWorkers] = useState([
    { name: 'Ramesh Singh', contact: '9812345678', address: 'Sector 10, Gurgaon', experience: '5 years', specialty: 'Pipe installation' },
  ]);
  const [newWorker, setNewWorker] = useState({ name: '', contact: '', address: '', experience: '', specialty: '' });

  const handleChange = (e) => setNewWorker({ ...newWorker, [e.target.name]: e.target.value });

  const handleAddWorker = () => {
    setWorkers([...workers, newWorker]);
    setNewWorker({ name: '', contact: '', address: '', experience: '', specialty: '' });
  };

  const handleDeleteWorker = (index) => {
    const updatedWorkers = workers.filter((_, i) => i !== index);
    setWorkers(updatedWorkers);
  };

  return (
    <div>
      <h2>Manage Carpenters</h2>
      <div>
        <h3>Add New Worker</h3>
        <input type="text" name="name" placeholder="Name" value={newWorker.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact" value={newWorker.contact} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={newWorker.address} onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Experience" value={newWorker.experience} onChange={handleChange} required />
        <input type="text" name="specialty" placeholder="Specialty" value={newWorker.specialty} onChange={handleChange} required />
        <button onClick={handleAddWorker}>Add Worker</button>
      </div>

      <div>
    <h2>List of Carpenters</h2>
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
  </div>
  );
};

export default AdminCarpentryPage;
