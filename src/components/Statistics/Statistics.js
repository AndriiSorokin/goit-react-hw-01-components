import React from 'react';
import StatisticList from './StatisticList';
import './Statistics.css'

const Statistics = ({ value}) => {
  return (
    <section className="statistics">
  <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {value.map(elem => <StatisticList key={elem.id} {...elem} />)}
  </ul>
</section>
  );
};

export default Statistics;