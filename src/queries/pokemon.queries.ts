import {Pokemon, PokemonWithProps} from "../types/pokemon.types";

/**
 * Fetches the first 151 Pokemon from the PokeAPI.
 * @async
 * @function
 * @returns {Promise<Pokemon[]>} - A promise that resolves to an array of Pokemon objects.
 */
export const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
};

/**
 * Searches for Pokemon whose names begin with the given string.
 * @async
 * @function
 * @param {string} pokemonName - The string to search for in Pokemon names.
 * @returns {Promise<Pokemon[]>} - A promise that resolves to an array of matching Pokemon objects.
 */
export const buscarPokemons = async (pokemonName: string): Promise<Pokemon[]> => {
    const data = await getPokemons();
    return data.filter(pokemon => pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase()));
};

/**
 * Fetches details for a single Pokemon by name.
 * @async
 * @function
 * @param {string} pokemonName - The name of the Pokemon to fetch.
 * @returns {Promise<PokemonWithProps>} - A promise that resolves to a Pokemon object with additional properties.
 */
export const getPokemon = async (pokemonName: string): Promise<PokemonWithProps> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    return await response.json();
};