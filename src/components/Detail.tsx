import PropTypes from "prop-types";
import { useAppSelector } from "../redux/hooks";

/**
 * Component that displays details for a selected Pokemon.
 * @function
 * @returns {JSX.Element|null} - A JSX element that displays the selected Pokemon's name, ID, and image, or null if no Pokemon is selected.
 */

const Detail = () => {
    const pokemon = useAppSelector(state => state.pokemon.selectedPokemon)

    return pokemon ? (
        <div className="vistaPokemon">
            <h4>Pokemon: {pokemon.name}</h4>
            <h5>#{pokemon.id}</h5>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
        </div>
    ): null;
}

Detail.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default Detail;
