import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  actionHistorial,
  getPokemons,
  getSelectedPokemon,
} from "../redux/pokemonSlice";

/**
 * Component that displays a list of Pokemon.
 * @function
 * @returns {JSX.Element} - A JSX element that displays a list of Pokemon with a ListItem for each one.
 */

const List = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state.pokemon.pokemons);

  useEffect(() => {
    //Deberan realizar la busqueda con la variable correspondiente
    dispatch(getPokemons(""));
  }, [dispatch]);

  /**
   * Dispatches two actions: getSelectedPokemon and actionHistorial, to select a Pokemon and add it to the history.
   * @function
   * @param {Pokemon} pokemon - The Pokemon to select and add to the history.
   */
  const handleClick = (pokemon: Pokemon) => {
    dispatch(getSelectedPokemon(pokemon.url));
    dispatch(actionHistorial(pokemon));
  };

  return (
    <div id="listadoCategorias">
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <ListItem
            pokemon={pokemon}
            seleccionarPokemon={() => handleClick(pokemon)}
            key={extractPokemonId(pokemon.url)}
          />
        ))}
    </div>
  );
};

export default List;
