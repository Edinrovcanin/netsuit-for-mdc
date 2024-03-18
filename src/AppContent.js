// src/AppContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerList from './CustomerList';

function AppContent() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT'); /* potrebno dodati endpoint baze is netsuita */
      setCustomers(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Da bi izbacio listu korisnika potrebno je povezati se sa endpointom od netsuita projekta</h1>
      {error && <div>Error: {error}</div>}
      <CustomerList customers={customers} />
    </div>
  );
}

export default AppContent;
