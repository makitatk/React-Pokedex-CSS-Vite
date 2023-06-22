import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";

const SearchPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <p className="p-search">
        We found <span>{filteredPokemons.length}</span> matches
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
