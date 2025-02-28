// Import di Link e NavLink dalla libreria react-router-dom per la navigazione
import { NavLink } from "react-router-dom";

import MovieForm from "./MovieForm"

export default function Header() {
    return (
        <header>
            <div>
                <h2>BOOLFLIX</h2>
                <div className="navBar">
                    <NavLink to="/">Homepage</NavLink>
                    <NavLink to="/film">Film</NavLink>
                    <NavLink to="/serietv">SerieTV</NavLink>
                </div>
            </div>

            <MovieForm />
        </header>
    )
}