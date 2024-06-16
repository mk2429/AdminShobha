import React, { useState } from 'react';
import RateUpdater from './RateUpdater';
import ServiceRequests from './ServiceRequests';

export default function AdminScreen() {
  const [showRateUpdater, setShowRateUpdater] = useState(true);

  const handleShowRateUpdater = () => {
    setShowRateUpdater(true);
  };

  const handleShowServiceRequests = () => {
    setShowRateUpdater(false);
  };

  return (
    <div className="container">
      <h1 className="display-1 text-primary text-center mb-4">Shobha Admin</h1>
      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-primary mx-2"
          onClick={handleShowRateUpdater}
          disabled={showRateUpdater}
        >
          Update Rate
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handleShowServiceRequests}
          disabled={!showRateUpdater}
        >
          Service Request
        </button>
      </div>
      {showRateUpdater ? <RateUpdater /> : <ServiceRequests />}
    </div>
  );
}
