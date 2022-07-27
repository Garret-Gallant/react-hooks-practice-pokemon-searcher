import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemons} ) {
   
  
  return (
    <Card.Group itemsPerRow={6}>     
      {pokemons.map((pokemons) => (
        <PokemonCard
          spritesBack={pokemons.sprites.back}
          sprites={pokemons.sprites.front}
          hp={pokemons.hp}
          name={pokemons.name}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
