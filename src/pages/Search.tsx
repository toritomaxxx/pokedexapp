import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components";

export const Search = () => {
  const location = useLocation();

  const { getAllPokemons } = useContext(PokemonContext);

  const filteredPokemon = getAllPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <p className="p-search">
        Resultados de la búsqueda <span>{filteredPokemon.lenght}</span>
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemon.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
