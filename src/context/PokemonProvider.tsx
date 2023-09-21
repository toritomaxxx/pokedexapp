import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({children}) => {
    const [pokemonsListInit, setPokemonsListInit] = useState([]); //Array de pokemons [{}]
    const [pokemonAll, setPokemonAll] = useState([]); //Array de pokemons [{}
    const [offset, setOffset] = useState(0);


    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    const {valueSearch,onChange,resetForm} = useForm({
        valueSearch: '',
    });



    //Llamar a todos los pokemons
    const getAllPokemons = async () => {
        const BaseUrl = `https://pokeapi.co/api/v2/`;
        const res = await fetch(`${BaseUrl}pokemon?limit=100000&offset=0`);
        const data = await res.json();
        const promises = data.results.map(async (pokemon: { url: RequestInfo | URL; }) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setPokemonAll(results);
        setLoading(false);
    }


    //Primer llamado a la API
    const getPokemons = async (limit = 50) => {
        const BaseUrl = `https://pokeapi.co/api/v2/`;
        const res = await fetch(
            `${BaseUrl}pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();
        
        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        });
        const results = await Promise.all(promises)
        setPokemonsListInit([...pokemonsListInit, ...results]);
        setLoading(false);
    };

    //Buscar por id del pokemon
    const getPokemonById = async (id: string) => {
        const BaseUrl = `https://pokeapi.co/api/v2/`;
        const res = await fetch(`${BaseUrl}pokemon/${id}`);
        const data = await res.json();
        return data;
    }


    useEffect(() => {
        getPokemons();
    }, []);
    useEffect(() => {
        getAllPokemons();
    }, []);


    return(
        <PokemonContext.Provider  value={{
            valueSearch,
            onChange,
            resetForm,
            pokemonsListInit,
            pokemonAll,
            getPokemonById,
        }}>
            {children}
        </PokemonContext.Provider>

    )}
