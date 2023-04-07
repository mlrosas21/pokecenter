import React from "react";
import PropTypes from "prop-types";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";

interface PokemonListItemProps {
    pokemon: Pokemon,
    seleccionarPokemon: (pokemon: Pokemon) => void
}

/**
 * Component that displays a single Pokemon as a list item.
 * @function
 * @param {PokemonListItemProps} props - The props passed to the component.
 * @returns {JSX.Element} - A JSX element that displays a single Pokemon's name and ID.
 */
const PokemonListItem = ({ pokemon, seleccionarPokemon }: PokemonListItemProps) =>
    <div onClick={() => seleccionarPokemon(pokemon)}>
        <strong>{pokemon.name}</strong>
        <small> #{extractPokemonId(pokemon.url)}</small>
    </div>


PokemonListItem.propTypes = {
    pokemon:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default PokemonListItem;
