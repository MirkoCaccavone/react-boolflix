// Import di NavLink dalla libreria react-router-dom per la navigazione
import { NavLink } from "react-router-dom";

// Import del componente MovieForm
import MovieForm from "./MovieForm"

// Componente Header per visualizzare l'intestazione del sito
export default function Header() {
    return (
        <header>
            <div>
                <h2>BOOLFLIX</h2>
                <div className="navBar">
                    {/* Link di navigazione per la homepage */}
                    <NavLink to="/">Homepage</NavLink>
                    {/* Link di navigazione per la pagina dei film */}
                    <NavLink to="/film">Film</NavLink>
                    {/* Link di navigazione per la pagina delle serie TV */}
                    <NavLink to="/serietv">SerieTV</NavLink>
                </div>
            </div>

            {/* Componente per il form di ricerca dei film */}
            <MovieForm />
        </header>
    )
}