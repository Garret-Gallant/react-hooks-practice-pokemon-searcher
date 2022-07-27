import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {hp, name, sprites, spritesBack} ) {
  const [isFlipped, setIsFlipped] = useState(true);
  function cardFlip() {
    setIsFlipped((isFlipped) => !isFlipped);
  }

  return (
    <Card onClick={cardFlip}>
      <div>
        <div className="image">
          <img src={isFlipped ? sprites : spritesBack} alt="oh no!" />
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
