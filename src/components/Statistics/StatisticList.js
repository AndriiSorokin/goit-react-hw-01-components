import React from 'react';
import PropsTypes from 'prop-types'

const StatisticList = ({label,percentage}) => {
  return (
    <li className="itemStatistic">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatisticList;

StatisticList.propsTypes = {
  label: PropsTypes.string.isRequired,
  percentage: PropsTypes.number.isRequired
}