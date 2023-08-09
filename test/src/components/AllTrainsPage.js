import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://example.com/api/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Trains Schedule</h2>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;