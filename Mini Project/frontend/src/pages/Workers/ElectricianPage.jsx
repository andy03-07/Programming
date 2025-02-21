// src/pages/Workers/ElectricianPage.js
import React , {useEffect,useState}from 'react';
import axios from "axios"
import '../../Styles/WorkerList.css';

const ElectricianPage = () => {
  const [workers,setWorkers] = useState([]);

  useEffect(() => {
    fetchWorkers();
  }, []);
  
  const fetchWorkers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getelectrician/all");
      setWorkers(response.data);
    } catch (error) {
      console.error("Error fetching workers:", error);
    }
  };

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
          <th>Experience (years)</th>
          <th>Specialty</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {workers.map((electrician, index) => (
          <tr key={index} className="worker-card">
            <td>{electrician.workername}</td>
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
