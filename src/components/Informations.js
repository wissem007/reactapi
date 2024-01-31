// Informations.js
import React, { useState, useEffect } from 'react';
import './Informations.css';

function Informations({ licenceId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://178.33.44.117:3000/informations/${licenceId}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, [licenceId]);

  return (
    <div className="informations-container">
      <h2 className="informations-header">Informations sur le joueur</h2>
      <table className="informations-table">
        <tbody>
          {data.map((player, index) => (
            <tbody key={index}>
              <tr>
                <td>Licence Number: {player.num_licence}</td>
              </tr>
              <tr>
                <td>Saison: {player.saison}</td>
              </tr>
              <tr>
                <td>Type: {player.type_interv}</td>
              </tr>

              <tr>
                <td>Nom: {player.name}</td>
              </tr>
              <tr>
                <td>Prénom: {player.last_name}</td>
              </tr>
              <tr>
                <td>Date de naissance: {player.date_naissance.substring(0, 10)}</td>
              </tr>
              <tr>
                <td>Nationalité: {player.nationalite}</td>
              </tr>
              <tr>
                <td>Catégorie: {player.categorie}</td>
              </tr>
              <tr>
                <td>Type de Licence : {player.typelicence}</td>
              </tr>
              <tr>
                <td>Numéro de joueur: {player.player_num}</td>
              </tr>
              <tr>
                <td>Division : {player.division}</td>
              </tr>
              <tr>
                <td>Club: {player.team_initial}</td>
              </tr>
              
            </tbody>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Informations;
