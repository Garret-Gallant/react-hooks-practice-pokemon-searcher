import React from "react";

function Search( { setSearchPokemon } ) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        type="text" 
        className="prompt" 
        onChange={(e) => setSearchPokemon(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
