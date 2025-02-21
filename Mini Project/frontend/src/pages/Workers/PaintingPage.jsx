// src/pages/Workers/PlumbingPage.js
import React , {useEffect,useState}from 'react';
import axios from "axios"
import '../../Styles/WorkerList.css';

const PaintingPage = () => {
const [workers,setWorkers] = useState([]);

useEffect(() => {
  fetchWorkers();
}, []);

const fetchWorkers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/getpainter/all");
    setWorkers(response.data);
  } catch (error) {
    console.error("Error fetching workers:", error);
  }
};

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
          {workers.map((painter, index) => (
            <tr key={index} className="worker-card">
              <td>{painter.workername}</td>
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
