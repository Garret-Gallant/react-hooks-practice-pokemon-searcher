import React, { useState } from "react";

function Search( {setPokemon, pokemons} ) {
  const [searchPokemon, setSearchPokemon] = useState("")

  console.log(searchPokemon)

  function filterPokemons(){
    const newPokemons = pokemons.filter((pokemon) => pokemon.name.includes(searchPokemon))
    setPokemon(newPokemons)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type='text' onChange={(e) => {
          setSearchPokemon(e.target.value)
          filterPokemons()
        }} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
