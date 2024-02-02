// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ match }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleBooking = () => {
    // Perform booking logic here
    // You can use local/session storage to store user details
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
