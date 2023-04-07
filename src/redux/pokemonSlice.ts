import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";


const apiPokemon = async (name: string) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    if (response.ok) {
        const data = await response.json();
        return data.results.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().startsWith(name.toLowerCase()))
    } else {
        throw new Error('Page not found')
    }
}

export const getPokemons = createAsyncThunk(
    '/getPokemons',
    async (name: string) => {
        const response = await apiPokemon(name)
        return response
    }
)

export const getSelectedPokemon = createAsyncThunk(
    '/getSelectedPokemon',
    async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data
    }
)

interface initialType {
    busqueda: string
    pokemons: never[]
    selectedPokemon: PokemonWithProps
    historial: Pokemon[]
    historialBusquedas: string[]
    error: string | undefined


}

const initialState: initialType = {
    busqueda: '',
    pokemons: [],
    historial: [],
    historialBusquedas: [],
    error: "",
    selectedPokemon: {
        name: "",
        id: 0,
        url: "",
        sprites: {
            "default": "",
            other: {
                home: {
                    front_default: ""
                }
            }
        }
    }
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        actionBusqueda: (state, action) => {
            state.busqueda = action.payload
        },
        actionHistorial: (state, action) => {
            if (!state.historial.find(poke => poke.name === action.payload.name)) {
                state.historial.push(action.payload)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
            state.error = ""
            if (action.payload.length && !state.historialBusquedas.find(busqueda => busqueda === state.busqueda && state.busqueda)) {
                state.historialBusquedas.push(state.busqueda)
            }
        })
        builder.addCase(getPokemons.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(getSelectedPokemon.fulfilled, (state, action) => {
            state.selectedPokemon = action.payload
        })
    },
})

export const { actionBusqueda, actionHistorial } = pokemonSlice.actions


export default pokemonSlice.reducer