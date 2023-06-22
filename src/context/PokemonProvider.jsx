import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/UseForm";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  //estados simples para la aplicion

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  //Custom Hook
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });
  //Obtener 50 pokemones de la Api

  useEffect(() => {
    const getAllPokemons = async (limit = 50) => {
      const urlBase = "https://pokeapi.co/api/v2/";

      const res = await fetch(
        `${urlBase}pokemon?limit=${limit}&offset=${offset}`
      );

      const data = await res.json();

      const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);

        const data = await res.json();

        return data;
      });
      const results = await Promise.all(promises);
      setAllPokemons([...allPokemons, ...results]);
      setLoading(false);
    };

    getAllPokemons();
  }, [offset]);

  //Obtener todos los pokemones

  useEffect(() => {
    const getGlobalPokemons = async () => {
      const urlBase = "https://pokeapi.co/api/v2/";

      const res = await fetch(`${urlBase}pokemon?limit=100000&offset=0`);

      const data = await res.json();

      const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);

        const data = await res.json();

        return data;
      });
      const results = await Promise.all(promises);
      setGlobalPokemons(results);
      setLoading(false);
    };
    getGlobalPokemons();
  }, []);

  //llamar a pokemos por el id

  const getPokemonById = async (id) => {
    const urlBase = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${urlBase}pokemon/${id}`);

    const data = await res.json();

    return data;
  };

  //Load More Pokemons

  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  //Filteres Function Checkbox
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
  const [filteredPokemons, setfilteredPokemons] = useState([]);

  const handleCheckbox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = globalPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setfilteredPokemons([...filteredPokemons, ...filteredResults]);
    } else {
      const filteredResults = filteredPokemons.filter(
        (pokemon) =>
          !pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setfilteredPokemons([...filteredResults]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonById,
        active,
        setActive,
        onClickLoadMore,
        loading,
        setLoading,
        handleCheckbox,
        filteredPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
