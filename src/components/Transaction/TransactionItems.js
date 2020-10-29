import React from 'react';
import PropsTypes from 'prop-types'

const TransactionItems = ({type,amount,currency}) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItems;

TransactionItems.propsTypes = {
  type: PropsTypes.string.isRequired,
  amount: PropsTypes.number.isRequired,
  currency: PropsTypes.string.isRequired
}