import React, { useState , useEffect} from 'react';
import Header from '../../pages/header';
import { useSelector } from 'react-redux';
import axios from 'axios'
import Carpenter from '../../logos/capenter.jpg';
import '../../Styles/admin.css';

const AdminCarpentryPage = () => {
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
        const response = await axios.get(`http://localhost:5000/api/getcarpenter/${adminId}`);
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
        const response = await axios.post("http://localhost:5000/api/addcarpenter", newWorker);
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
        await axios.delete(`http://localhost:5000/api/deletecarpenter/${id}`);
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
        <div className='heading'>
          Manage Carpenters
        </div>
        <div className='line'></div>
      
        <div className='add'>
          <h3>Add New Carpenter</h3>
          <input type="text" name="workername" placeholder="Name" value={newWorker.workername} onChange={handleChange} required className="admin-input" />
          <input type="text" name="contact" placeholder="Contact" value={newWorker.contact} onChange={handleChange} required className="admin-input" />
          <input type="text" name="address" placeholder="Address" value={newWorker.address} onChange={handleChange} required className="admin-input" />
          <input type="text" name="experience" placeholder="Experience" value={newWorker.experience} onChange={handleChange} required className="admin-input" />
          <input type="text" name="specialty" placeholder="Specialty" value={newWorker.specialty} onChange={handleChange} required className="admin-input" />
          <button onClick={handleAddWorker} className="admin-add-btn">Add Worker</button>
          <p style={{color:'red',fontWeight:'700',marginTop:'10px'}}>{errors}</p>
        </div>
      </div>

      <div className="list-container">
        <h2 className='heading'>List of Carpenters</h2>
        <div className='line'></div>
        {workers.length > 0 ? (
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
          <tbody className='body'>
            {workers.map((worker, index) => (
              <tr key={index} className="worker-row">
                <td>{worker.workername}</td>
                <td>{worker.contact}</td>
                <td>{worker.address}</td>
                <td>{worker.experience}</td>
                <td>{worker.specialty}</td>
                <td>
                <button style={{display:'block',position:'relative',left:'32px'}} onClick={() => window.location.href = `tel:${worker.contact}`} className="contact-btn">Call</button>
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
      <img className="img" src={Carpenter} alt="Carpenter" />
    </div>
  );
};

export default AdminCarpentryPage;
