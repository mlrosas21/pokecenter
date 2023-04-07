import "./styles.css";
import Search from "./components/Search";
import { SelectHistory } from "./components/SelectHistory";
import { SearchHistory } from "./components/SearchHistory";

export default function App() {

    return (
        <div className="App">
            <h1>Pokédex</h1>
            <div id="bandejaDeEntrada">
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Search />
                    <SelectHistory />
                    <SearchHistory />
                </div>
            </div>
        </div>
    );
}
