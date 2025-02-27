import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Flag from "react-world-flags";

export default function Main() {

    // Accediamo ai film dal contesto
    const { movies } = useContext(GlobalContext);


    // Funzione per determinare la bandiera dalla lingua
    const getFlag = (language) => {
        const flags = {
            "en": "GB",
            "it": "IT",
            "es": "ES",

        };



        // Se il codice della lingua esiste, restituisce la bandiera corrispondente
        return flags[language]
    };

    return (
        <main>
            <h2>Risultati della ricerca</h2>
            {movies.length > 0 ? (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <h3>{movie.title || movie.name}</h3>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title || movie.name} />
                            <p><strong>Titolo Originale:</strong> {movie.original_title || movie.original_name}</p>
                            <p><strong>Lingua:</strong>
                                {getFlag(movie.original_language) ? (
                                    <Flag
                                        code={getFlag(movie.original_language)}
                                        style={{ width: "30px", height: "20px" }}
                                    />
                                ) : (
                                    <img src="./../bandiera_pirata.avif" alt="Flag not found" style={{ width: "30px", height: "20px" }} />
                                )}
                            </p>
                            <p><strong>Voto:</strong> {movie.vote_average}</p>
                            <p><strong>Tipo:</strong> {movie.type === "movie" ? "Film" : "Serie TV"}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nessun film trovato</p>
            )}
        </main>
    );
}
