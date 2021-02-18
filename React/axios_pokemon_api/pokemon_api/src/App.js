import React, { useState } from 'react';

import './App.css';
import FetchPButton from './Components/FetchPButton';
import PokemonShow from './Components/PokemonShow';

function App() {
  
    const [pokemon, setPokemon] = useState([])

    return(
    <div className="App">
      <FetchPButton  pokemon={ pokemon } setPokemon={ setPokemon }/>
      <PokemonShow  pokemon={ pokemon }/>
    </div>
  );
}

export default App;
