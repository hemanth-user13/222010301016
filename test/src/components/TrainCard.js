import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div>
      <h3>{train.name}</h3>
      <p>Departure: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      <p>Seats Available: {train.seatsAvailable}</p>
      <Link to={`/trains/${train.id}`}>View Details</Link>
    </div>
  );
};

export default TrainCard;