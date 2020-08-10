import './App.css';
import dotenv from 'dotenv';
import React, { useState, useEffect } from 'react';
import { getCharactersByName } from './api/index'

dotenv.config();

function App() {
  const [nameSubstring, setNameSubstring] = useState('');
  const [characters, setCharacters] = useState([]);
  useEffect(() => { 
    nameSubstring && getCharactersByName(nameSubstring)
      .then(({ results }) => setCharacters(results))
  }, [nameSubstring])

  return (
    <div className="App">
      <input
        value={nameSubstring}
        onChange={e => setNameSubstring(e.target.value)} />
      { characters.map(character => (
        <div key={ character.id }>
          <h3>{character.name}</h3>
          <h5>{character.description}</h5>
        </div>
      )) }
    </div>
  );
}

export default App;
