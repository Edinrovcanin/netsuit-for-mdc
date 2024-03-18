// src/Customer.js
import React from 'react';

function Customer({ customer }) {
  return (
    <div className="customer">
      <h2>{customer.name}</h2>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
}

export default Customer;
