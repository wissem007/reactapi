// App.js
import React, { useState } from 'react';
import Informations from './components/Informations';

function App() {
  const [licenceId, setLicenceId] = useState(""); // État pour stocker le numéro de licence

  const handleInputChange = (event) => {
    setLicenceId(event.target.value); // Mettre à jour l'état avec la valeur du champ de saisie
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={licenceId} onChange={handleInputChange} />
        <Informations licenceId={licenceId} /> {/* Passer le numéro de licence variable */}
      </header>
    </div>
  );
}

export default App;
