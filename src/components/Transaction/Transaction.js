import React from 'react';
import TransactionItems from './TransactionItems'
import PropsTypes from 'prop-types'

const Transaction = ({items}) => {
  return (
  <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(elem =><TransactionItems key={elem.id} {...elem}/>)}
  </tbody>
</table>

  );
};

export default Transaction


Transaction.propsType = {
  items: PropsTypes.object.isRequired
}