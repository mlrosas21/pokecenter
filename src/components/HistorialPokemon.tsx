import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSelectedPokemon } from "../redux/pokemonSlice";
import { Pokemon } from "../types/pokemon.types";
import ListadoPokemonsItem from "./ListadoPokemonsItem";

export const HistorialPokemon = () => {
    const dispatch = useAppDispatch()
    const historial = useAppSelector(state => state.pokemon.historial)

    return (
        <div>
            <h3>Pokemons visitados:</h3>

            {historial && historial.map((pokemon: Pokemon, i) => (
                <ListadoPokemonsItem pokemon={pokemon}
                    seleccionarPokemon={() => dispatch(getSelectedPokemon(pokemon.url))}
                    key={i} />
            ))}

        </div>
    )
}