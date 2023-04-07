import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";
import { HistorialPokemon } from "./components/HistorialPokemon";
import { HistorialBuscados } from "./components/HistorialBuscados";

export default function App() {

    return (
        <div className="App">
            <h1>Pokédex</h1>
            <div id="bandejaDeEntrada">
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <BuscarPokemon />
                    <HistorialPokemon />
                    <HistorialBuscados />
                </div>
            </div>
        </div>
    );
}
