import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon, Loader } from ".";

export const PokemonList = () => {
  const { pokemonsListInit, loading, filteredPokemons } =
    useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.lenght ? (
            <>
              {filteredPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {pokemonsListInit.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
