import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Flag from "react-world-flags";

// Importa il componente FontAwesomeIcon da FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Icona stella piena


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

    // Funzione per generare le stelle in base al voto
    const generateStars = (voteAverage) => {
        const fullStars = Math.ceil(voteAverage / 2); // Arrotondiamo il voto diviso per 2
        let stars = [];

        // Genera le stelle
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar} // Stella piena
                    style={{ color: i < fullStars ? "#ffff80" : "#c0c0c0" }}
                />
            )
        }
        return stars;
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
                            <div>{generateStars(movie.vote_average)}</div>
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
