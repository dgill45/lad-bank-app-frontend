import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = ({ accountId }) => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/accounts/${accountId}`)
      .then(response => {
        setAccount(response.data);
      });
  }, [accountId]);

  return (
    <div>
      {account && (
        <div>
          <h3>Account Number: {account.number}</h3>
          {/* Render list of transactions */}
        </div>
      )}
    </div>
  );
};

export default Account;
