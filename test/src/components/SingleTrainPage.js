import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint for fetching a single train
    axios.get(`http://example.com/api/trains/${trainId}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      {/* Display train details here */}
    </div>
  );
};

export default SingleTrainPage;