// ShowDetails.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowDetails = ({ match }) => {
  const [show, setShow] = useState(null);

 useEffect(() => {
  fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Check if data is logged
      setShow(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);
  

  return (
    <div>
      <h1>Show Details</h1>
      {show && (
        <div>
          <h2>{show.name}</h2>
          <p>{show.summary}</p>
          <Link to={`/booking/${show.id}`} className="btn btn-primary">
            Book Movie Ticket
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
