import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { actionBusqueda, getPokemons } from "../redux/pokemonSlice"

export const HistorialBuscados = () => {
    const dispatch = useAppDispatch()
    const historial = useAppSelector(state => state.pokemon.historialBusquedas)

    const handleClick = (busqueda: string) => {
        dispatch(actionBusqueda(busqueda))
        dispatch(getPokemons(busqueda))
    }

    return (
        <div>
            <h3>Pokemons buscados:</h3>

            {historial && historial.map((busqueda: string, i) => (
                <div onClick={() => handleClick(busqueda)}>
                    <strong>{busqueda}</strong>
                </div>
            ))}

        </div>
    )
}