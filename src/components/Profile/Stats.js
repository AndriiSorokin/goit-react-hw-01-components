import React from 'react';
import PropsTypes from 'prop-types'

const Stats = ({label, quantity}) => {
  return (
     <li>
      <span className="labelProfile">{label}</span>
      <span className="quantityProfile">{quantity}</span>
    </li>
  );
};

export default Stats;

Stats.propsTypes = {
  label: PropsTypes.string.isRequired,
  quantity: PropsTypes.number.isRequired
}