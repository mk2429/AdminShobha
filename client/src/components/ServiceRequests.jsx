import React, { useEffect, useState } from 'react';

export default function ServiceRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('https://shobhashoppingcentre.onrender.com/api/getrequest')
      .then(response => response.json())
      .then(data => setRequests(data.reverse()))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Service Requests</h1>
      <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
        {requests.map(request => (
          <div key={request._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{request.cname}</h5>
              <p className="card-text">
                <strong>Date:</strong> {new Date(request.requestDate).toLocaleDateString()}<br />
                <strong>Contact Number:</strong> {request.cnumber}<br />
                <strong>Address:</strong> {request.address}<br />
                <strong>Appliance:</strong> {request.appliance}<br />
                <strong>Description:</strong> {request.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
