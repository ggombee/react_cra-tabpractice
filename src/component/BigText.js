import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './BigText.css';

// eslint-disable-next-line react/prop-types
const BigText = ({ color }) => {
  return (
    <div className="big-text">
      <h1 style={{ color }}>Color</h1>
    </div>
  );
};

export default BigText;
