import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Main() {

    // Accediamo ai film dal contesto
    const { movies } = useContext(GlobalContext);
    return (
        <main>
            <h2>Risultati della ricerca</h2>
            {movies.length > 0 ? (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
                            <p><strong>Lingua:</strong> {movie.original_language}</p>
                            <p><strong>Voto:</strong> {movie.vote_average}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nessun film trovato</p>
            )}
        </main>
    );
}
