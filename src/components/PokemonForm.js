import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [newName, setNewName] = useState("");
  const [newHP, setNewHP] = useState("");
  const [spriteFront, setSpriteFront] = useState("");
  const [spriteBack, setSpriteBack] = useState("");

  const newPokemon = {
    name: newName,
    hp: newHP,
    sprites: { 
      front: spriteFront, 
      back: spriteBack 
    },
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          fetch("http://localhost:3001/pokemon", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPokemon),
          })
          .then((res) => res.json())
          .then((newPokemon) => addPokemon(newPokemon))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            onChange={(e) => setNewName(e.target.value)}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            onChange={(e) => setNewHP(e.target.value)}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            fluid
            onChange={(e) => setSpriteFront(e.target.value)}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            onChange={(e) => setSpriteBack(e.target.value)}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
