import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSelectedPokemon } from "../redux/pokemonSlice";
import { Pokemon } from "../types/pokemon.types";
import ListItem from "./ListItem";

/**
 * Renders a list of previously selected Pokemon.
 *
 * @return {JSX.Element} JSX Element that represents the list of previously selected Pokemon.
 */
export const SelectHistory = () => {
    const dispatch = useAppDispatch()
    const historial = useAppSelector(state => state.pokemon.historial)

    return (
        <div>
            <h3>Pokemons visitados:</h3>

            {historial && historial.map((pokemon: Pokemon, i) => (
                <ListItem pokemon={pokemon}
                    seleccionarPokemon={() => dispatch(getSelectedPokemon(pokemon.url))}
                    key={i} />
            ))}

        </div>
    )
}