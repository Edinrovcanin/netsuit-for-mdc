// src/CustomerList.js
import React from 'react';
import Customer from './Customer';

function CustomerList({ customers }) {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </div>
  );
}

export default CustomerList;
