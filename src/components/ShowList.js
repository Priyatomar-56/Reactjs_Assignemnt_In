// ShowList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  const showDetails = showId => {
    navigate(`/show/${showId}`); // Use navigate instead of history.push
  };

  return (
    <div>
      <h1>TV Shows</h1>
      <ul className="list-group">
        {shows.map(show => (
          <li
            key={show.show.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {show.show.name}
            <button
              className="btn btn-primary"
              onClick={() => showDetails(show.show.id)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
