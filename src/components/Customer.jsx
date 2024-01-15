import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customer = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/customers/${customerId}`)
      .then(response => {
        setCustomer(response.data);
      });
  }, [customerId]);

  return (
    <div>
      {customer && (
        <div>
          <h2>{customer.name}</h2>
          {/* Render list of accounts */}
        </div>
      )}
    </div>
  );
};

export default Customer;
