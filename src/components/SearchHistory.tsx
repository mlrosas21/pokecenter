import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { actionBusqueda, getPokemons } from "../redux/pokemonSlice"

/**
 * React component that displays a list of previously searched Pokemon.
 * When a user clicks on a search term, it dispatches an action to update
 * the search term and fetch the corresponding Pokemon.
 */
export const SearchHistory = () => {
  const dispatch = useAppDispatch();
  const historial = useAppSelector((state) => state.pokemon.historialBusquedas);

  /**
   * Event handler that updates the search term and fetches the corresponding Pokemon.
   * @param {string} busqueda - The search term.
   */
  const handleClick = (busqueda: string) => {
    dispatch(actionBusqueda(busqueda));
    dispatch(getPokemons(busqueda));
  };

  return (
    <div>
      <h3>Pokemons buscados:</h3>

      {historial &&
        historial.map((busqueda: string, i) => (
          <div key={i} onClick={() => handleClick(busqueda)}>
            <strong>{busqueda}</strong>
          </div>
        ))}
    </div>
  );
};
