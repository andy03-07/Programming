import React, { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import Header from '../header';
import axios from 'axios'
import '../../Styles/admin.css';
import P from '../../logos/a-man-in-overalls-stands-on-a-ladder-and-paints-a-wall-with-a-roller-isolated-on-transparent-background-png.webp'

const AdminPaintingPage = () => {
  const user = useSelector((state) => state.auth.user);
  const [errors,seterrors] = useState('');
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
      const response = await axios.get(`http://localhost:5000/api/getpainter/${adminId}`);
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
      const response = await axios.post("http://localhost:5000/api/addpainter", newWorker);
      setWorkers([...workers, response.data]);
      setNewWorker({ workername: "", contact: "", address: "", experience: "", specialty: "" });
      fetchWorkers();
    } catch (error) {
      seterrors(error.response.data.message);
      console.error("Error adding worker:", error);
      alert('Please fill out all fields.');
    }
  };

  const handleDeleteWorker = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deletepainter/${id}`);
      setWorkers(workers.filter((worker) => worker._id !== id));
    } catch (error) {
      console.error("Error deleting worker:", error);
    }
  };

  return (
    <div className="admin-page">
      <div>
        {Header()}
      </div>
      <div className="admin-container">
        <div className="heading">Manage Painters</div>
        <div className="line"></div>

        <div className="add">
          <h3>Add New Painter</h3>
          <input type="text" name="workername" placeholder="Name" value={newWorker.workername || ""} onChange={handleChange} required className="admin-input" />
          <input type="text" name="contact" placeholder="Contact" value={newWorker.contact} onChange={handleChange} required className="admin-input" />
          <input type="text" name="address" placeholder="Address" value={newWorker.address} onChange={handleChange} required className="admin-input" />
          <input type="text" name="experience" placeholder="Experience" value={newWorker.experience} onChange={handleChange} required className="admin-input" />
          <input type="text" name="specialty" placeholder="Specialty" value={newWorker.specialty} onChange={handleChange} required className="admin-input" />
          <button onClick={handleAddWorker} className="admin-add-btn">Add Painter</button>
          <p style={{color:'red',fontWeight:'700',marginTop:'10px'}}>{errors}</p>
        </div>
      </div>

      <div className="list-container">
        <h2 className="heading">List of Painters</h2>
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
          <p className="admin-no-workers">No painters available.</p>
        )}
      </div>
      <img className="img"src={P} alt="" />
    </div>
  );
};

export default AdminPaintingPage;
