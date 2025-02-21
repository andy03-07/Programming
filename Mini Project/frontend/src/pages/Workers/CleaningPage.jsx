// src/pages/Workers/CleaningPage.js
import React , {useEffect,useState}from 'react';
import axios from "axios"
import '../../Styles/WorkerList.css';

const CleaningPage = () => {
  const [workers,setWorkers] = useState([]);

  useEffect(() => {
    fetchWorkers();
  }, []);
  
  const fetchWorkers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getcleaner/all");
      setWorkers(response.data);
    } catch (error) {
      console.error("Error fetching workers:", error);
    }
  };

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
            <th>Experience (years)</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((cleaner, index) => (
            <tr key={index} className="worker-card">
              <td>{cleaner.workername}</td>
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
