import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ setPokemon, pokemons }) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setPokemon={setPokemon} pokemons={pokemons} />
      <br />
      <h2>Hello from Pokemon Collection</h2>
      <PokemonCollection pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
