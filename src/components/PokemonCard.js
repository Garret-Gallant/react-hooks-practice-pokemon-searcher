import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon} ) {
  const [isFlipped, setIsFlipped] = useState(true);
  const {hp, name, sprites} = pokemon

  function cardFlip() {
    setIsFlipped((isFlipped) => !isFlipped);
  }

  return (
    <Card onClick={cardFlip}>
      <div>
        <div className="image">
          <img src={isFlipped ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
