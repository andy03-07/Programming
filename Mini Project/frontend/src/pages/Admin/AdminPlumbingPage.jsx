import React, { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import Header from '../../pages/header'
import axios from 'axios'
import '../../Styles/admin.css';
import Plumb from '../../logos/plumbers.jpg'

const AdminPlumbingPage = () => {
  const user = useSelector((state) => state.auth.user);
  const [workers, setWorkers] = useState([]);
  const [newWorker, setNewWorker] = useState({
    workername: "",
    contact: "",
    address: "",
    experience: "",
    specialty: "",
    adminId: user.id,
  });

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const adminId = user?.id; 

      if (!adminId) {
        console.error("Admin ID is missing");
        return;
      }
      const response = await axios.get(`http://localhost:5000/api/getplumber/${adminId}`);
      setWorkers(response.data);
    } catch (error) {
      console.error("Error fetching workers:", error);
    }
  };

  const handleChange = (e) => {
    setNewWorker({ ...newWorker, [e.target.name]: e.target.value });
  };

  const handleAddWorker = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/addplumber", newWorker);
      setWorkers([...workers, response.data]);
      setNewWorker({ workername: "", contact: "", address: "", experience: "", specialty: "" });
      fetchWorkers();
    } catch (error) {
      console.error("Error adding worker:", error);
      alert('Please fill out all fields.');
    }
  };

  const handleDeleteWorker = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteplumber/${id}`);
      setWorkers(workers.filter((worker) => worker._id !== id));
    } catch (error) {
      console.error("Error deleting worker:", error);
    }
  };

  return (
    <div className="admin-page">
      <div>
        {Header()};
      </div>
      <div className="admin-container">
        <div className="heading">Manage Plumbers</div>
        <div className="line"></div>

        <div className="add">
          <h3>Add New Plumber</h3>
          <input type="text" name="workername" placeholder="Name" value={newWorker.workername} onChange={handleChange} required className="admin-input" />
          <input type="text" name="contact" placeholder="Contact" value={newWorker.contact} onChange={handleChange} required className="admin-input" />
          <input type="text" name="address" placeholder="Address" value={newWorker.address} onChange={handleChange} required className="admin-input" />
          <input type="text" name="experience" placeholder="Experience" value={newWorker.experience} onChange={handleChange} required className="admin-input" />
          <input type="text" name="specialty" placeholder="Specialty" value={newWorker.specialty} onChange={handleChange} required className="admin-input" />
          <button onClick={handleAddWorker} className="admin-add-btn">Add Worker</button>
        </div>
      </div>

      <div className="list-container">
        <h2 className="heading">List of Plumbers</h2>
        <div className="line"></div>

        {workers.length > 0 ? (
          <table className="worker-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Experience (years)</th>
                <th>Specialty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='body'>
              {workers.map((worker, index) => (
                <tr key={index}>
                  <td>{worker.workername}</td>
                  <td>{worker.contact}</td>
                  <td>{worker.address}</td>
                  <td>{worker.experience}</td>
                  <td>{worker.specialty}</td>
                  <td>
                    <button style={{display:'block',position:'relative',left:'28px'}} onClick={() => window.location.href = `tel:${worker.contact}`} className="contact-btn">Call</button>
                    <button onClick={() => handleDeleteWorker(worker._id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="admin-no-workers">No plumbers available.</p>
        )}
      </div>

      <img className="img" src={Plumb} alt="Plumber" />
    </div>
  );
};

export default AdminPlumbingPage;
