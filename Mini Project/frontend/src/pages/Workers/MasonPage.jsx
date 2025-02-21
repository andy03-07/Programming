// src/pages/Workers/MasonPage.js
import React , {useEffect,useState}from 'react';
import axios from "axios"
import '../../Styles/WorkerList.css';
const MasonPage = () => {
  const [workers,setWorkers] = useState([]);

useEffect(() => {
  fetchWorkers();
}, []);

const fetchWorkers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/getmason/all");
    setWorkers(response.data);
  } catch (error) {
    console.error("Error fetching workers:", error);
  }
};

  return (
    <div>
    <h2>Available Masons</h2>
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
          {workers.map((mason, index) => (
            <tr key={index} className="worker-card">
              <td>{mason.workername}</td>
              <td>{mason.contact}</td>
              <td>{mason.address}</td>
              <td>{mason.experience}</td>
              <td>{mason.specialty}</td>
              <td>
                <button
                  onClick={() => window.location.href = `tel:${mason.contact}`}
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

export default MasonPage;
