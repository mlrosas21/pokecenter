import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { actionBusqueda, getPokemons } from "../redux/pokemonSlice";
import List from "./List";
import Detail from "./Detail";

/**
 * Component that allows the user to search for Pokemon and displays the search results.
 * @function
 * @returns {JSX.Element} - A JSX element that includes a search bar and a list of Pokemon.
 */
const Search = () => {
    const busquedaState = useAppSelector(state => state.pokemon.busqueda)
    const [busqueda, setBusqueda] = useState(busquedaState || "")
    const dispatch = useAppDispatch()

    useEffect(() => {
        setBusqueda(busquedaState)
    }, [busquedaState])

    const onBuscarClick = () => {
        dispatch(actionBusqueda(busqueda))
        dispatch(getPokemons(busqueda))
    }

    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc..."} value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                <button onClick={() => onBuscarClick()}>Buscar</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <List />
                <Detail />
            </div>
        </>
    );
}

export default Search;
