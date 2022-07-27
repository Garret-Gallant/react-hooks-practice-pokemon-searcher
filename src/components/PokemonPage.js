import React, { useState } from "react";
import { useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({}) {
  const [pokemons, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  console.log(searchPokemon);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((pokemonData) => setPokemon(pokemonData));
  }, []);

  function addPokemon(newPokemon) {
    setPokemon([...pokemons, newPokemon]);
  }

  const pokemonToDisplay = pokemons.filter((pokemon) => 
  return pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search
        searchPokemon={searchPokemon}
        setSearchPokemon={setSearchPokemon}
      />
      <br />
      <h2>Hello from Pokemon Collection</h2>
      <PokemonCollection pokemons={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
