import React, { useState } from "react";
import PokemonPage from "./PokemonPage";
import { useEffect } from 'react';

function App() {
  const [pokemons, setPokemon] = useState([])
  console.log(pokemons)

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokemonData => setPokemon(pokemonData))
  }, [])

  return (
    <div className="App">
      <PokemonPage setPokemon={setPokemon} pokemons={pokemons} />
    </div>
  );
}

export default App;
