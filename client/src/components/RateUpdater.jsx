import React, { useState } from 'react';

export default function RateUpdater() {
  const [id, setId] = useState('');
  const [rate, setRate] = useState('');
  const [response, setResponse] = useState(null);

  const handleSelectionChange = (event) => {
    const selectedOption = event.target.value;
    setId(selectedOption);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleUpdateRate = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/setrates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, rate }),
      });

      const data = await res.json();
      setResponse(data);

      // Clear form fields if update was successful
      if (data.success) {
        setId('');
        setRate('');

        // Clear success message after 1 second
        setTimeout(() => {
          setResponse(null);
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse({ success: false, message: 'Server Error: Cannot update rate' });
    }
  };

  return (
    <div className='w-100  mt-4 d-flex justify-content-center align-items-center'>
      <div className='w-75 d-flex justify-content-center align-items-center flex-column rounded border border-info'>
        <h1 className='display-6 text-info'>Update Rate</h1>
        <select className='w-75 mt-2' value={id} onChange={handleSelectionChange}>
          <option value="" disabled>Select Commodity</option>
          <option value="1">Gold 24K</option>
          <option value="2">Gold 22K</option>
          <option value="3">Gold 18K</option>
          <option value="4">Silver</option>
        </select>

        <input
          className='w-75 mb-2'
          placeholder='New Rate'
          type="text"
          value={rate}
          onChange={handleRateChange}
        />

        <button className='btn btn-info my-2' onClick={handleUpdateRate}>Update Rate</button>
        {response && (
          <div>
            {response.success ? (
              <p>Rate updated successfully!</p>
            ) : (
              <p>Error: {response.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
