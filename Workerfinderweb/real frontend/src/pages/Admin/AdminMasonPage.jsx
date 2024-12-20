// src/pages/Admin/AdminMasonPage.js
import React, { useState } from 'react';

const AdminMasonPage = () => {
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
      <h2>Manage Plumbers</h2>
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
        <h3>List of Plumbers</h3>
        {workers.map((worker, index) => (
          <div key={index} className="worker-card">
            <p><strong>Name:</strong> {worker.name}</p>
            <p><strong>Contact:</strong> {worker.contact}</p>
            <p><strong>Address:</strong> {worker.address}</p>
            <p><strong>Experience:</strong> {worker.experience}</p>
            <p><strong>Specialty:</strong> {worker.specialty}</p>
            <button onClick={() => handleDeleteWorker(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMasonPage;
