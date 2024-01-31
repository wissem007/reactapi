// src/components/Informations.js
import React, { useState, useEffect } from 'react';

function Informations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/informations/111112001')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  return (
    <div>
      <h2>Informations</h2>
      <ul>
        {data.map(item => (
          <li key={item.ct_intervenant_id}>
            <strong>{item.name} {item.last_name}</strong>
            <p>CIN: {item.cin_number}</p>
            <p>Passport: {item.passport_num}</p>
            <p>Date of Birth: {item.date_of_birth}</p>
            <p>Place of Birth: {item.place_of_birth}</p>
            <p>Licence Number: {item.licence_num}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Informations;
