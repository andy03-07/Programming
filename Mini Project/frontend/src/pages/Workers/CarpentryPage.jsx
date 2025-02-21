import React , {useEffect,useState}from 'react';
import axios from "axios"
import '../../Styles/WorkerList.css';

const CarpentryPage = () => {
  const [workers,setWorkers] = useState([]);

  useEffect(() => {
    fetchWorkers();
  }, []);
  
  const fetchWorkers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getcarpenter/all");
      setWorkers(response.data);
    } catch (error) {
      console.error("Error fetching workers:", error);
    }
  };

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
          <th>Experience (years)</th>
          <th>Specialty</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {workers.map((carpenter, index) => (
          <tr key={index} className="worker-card">
            <td>{carpenter.workername}</td>
            <td>{carpenter.contact}</td>
            <td>{carpenter.address}</td>
            <td>{carpenter.experience}</td>
            <td>{carpenter.specialty}</td>
            <td>
              <button
                onClick={() => window.location.href = `tel:${carpenter.contact}`}
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

export default CarpentryPage;
