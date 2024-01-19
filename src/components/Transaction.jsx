import React from 'react';

const Transaction = ({ transaction }) => {
  return (
    <div>
      <p>Transaction ID: {transaction.id}</p>
      <p>Transaction Type: {transaction.type}</p>
      <p>Transaction Amount: {transaction.amount}</p>
      <p>Transaction Effective Date: {transaction.effectiveDate}</p>
    </div>
  );
}   

export default Transaction;