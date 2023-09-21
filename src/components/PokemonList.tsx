import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon } from '.'

export const PokemonList = () => {
    const {pokemonsListInit} = useContext(PokemonContext)
  return (
    <>
        <div className="card-list-pokemon container">
        {pokemonsListInit.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}

        </div>
    </>
  )
}
