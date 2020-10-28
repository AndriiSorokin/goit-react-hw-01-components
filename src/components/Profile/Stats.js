import React from 'react';

const Stats = ({label, quantity}) => {
  return (
     <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};

export default Stats;

