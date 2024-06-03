
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Form Submission Successful</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Success;
