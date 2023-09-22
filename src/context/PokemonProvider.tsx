import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {
  const [pokemonsListInit, setPokemonsListInit] = useState([]); //Array de pokemons [{}]
  const [pokemonAll, setPokemonAll] = useState([]); //Array de pokemons [{}
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const { valueSearch, onChange, resetForm } = useForm({
    valueSearch: "",
  });

  //Llamar a todos los pokemons
  const getAllPokemons = async () => {
    const BaseUrl = `https://pokeapi.co/api/v2/`;
    const res = await fetch(`${BaseUrl}pokemon?limit=100000&offset=0`);
    const data = await res.json();
    const promises = data.results.map(
      async (pokemon: { url: RequestInfo | URL }) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      }
    );
    const results = await Promise.all(promises);
    setPokemonAll(results);
    setLoading(false);
  };

  //Primer llamado a la API
  const getPokemons = async (limit = 50) => {
    const BaseUrl = `https://pokeapi.co/api/v2/`;
    const res = await fetch(
      `${BaseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setPokemonsListInit([...pokemonsListInit, ...results]);
    setLoading(false);
  };

  //Buscar por id del pokemon
  const getPokemonById = async (id: string) => {
    const BaseUrl = `https://pokeapi.co/api/v2/`;
    const res = await fetch(`${BaseUrl}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  const handleCheckBox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });
    if (e.target.checked) {
      const filtered = pokemonAll.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredPokemons, ...filtered]);
    }else{
        const filtered = filteredPokemons.filter((pokemon) =>
            !pokemon.types.map((type) => type.type.name).includes(e.target.name)
        );
        setFilteredPokemons([...filtered]);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onChange,
        resetForm,
        pokemonsListInit,
        pokemonAll,
        getPokemonById,
        onClickLoadMore,
        loading,
        setLoading,
        active,
        setActive,
        handleCheckBox,
        filteredPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
