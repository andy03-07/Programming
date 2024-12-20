import React, { useState, useEffect } from 'react';
import '../../Styles/WorkerList.css';
import api from '../../utils/api.jsx';  // Assuming you have a utility to call the backend


const WorkerList = ({ category }) => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchWorkers = async () => {
        setLoading(true);  // Start loading
        setError(''); // Reset error state

        try {
            const response = await fetch(`http://localhost:5001/api/workers/${category}`, {
                // Optional: Set a timeout for the request (e.g., 10 seconds)
                signal: new AbortController().signal,
            });

            if (!response.ok) {
                // Handle specific error statuses
                if (response.status === 404) {
                    setError('No workers found in this category.');
                } else if (response.status === 500) {
                    setError('Server error, please try again later.');
                } else {
                    setError(`Error: ${response.statusText}`);
                }
            } else {
                const data = await response.json();
                setWorkers(data);  // Set workers data
            }
        } catch (err) {
            // Handle any errors related to the fetch request (e.g., network error, timeout)
            if (err.name === 'AbortError') {
                setError('Request timed out, please try again later.');
            } else if (err.name === 'TypeError') {
                setError('Network error: Failed to fetch data.');
            } else {
                setError('An unexpected error occurred, please try again.');
            }
            console.error(err);  // Log the error for debugging
        } finally {
            setLoading(false);  // Stop loading after the request is completed
        }
    };

    fetchWorkers();
  }, [category]);

  // Display Loading and Error States
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error" style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="worker-list-container">
      <h2>Available Workers</h2>
      
      <ul className="worker-list">
        {workers.length > 0 ? (
          workers.map((worker, index) => (
            <li key={index} className="worker-card">
              <div className="worker-info">
                <h3>{worker.name}</h3>
                <p>{worker.category}</p>
                <p>{worker.contact}</p>
                <p>{worker.address}</p>
              </div>
              <button className="contact-btn">Contact</button>
            </li>
          ))
        ) : (
          !loading && <p>No workers available for this category.</p>  // Display when no workers are available
        )}
      </ul>
    </div>
  );
};

export default WorkerList;
