import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Flag from "react-world-flags";

// Importa il componente FontAwesomeIcon da FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Icona stella piena


export default function Main() {

    // Accediamo ai film dal contesto
    const { movies, tvShows } = useContext(GlobalContext);


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
                    icon={faStar}
                    style={{ color: i < fullStars ? "#ffff80" : "#c0c0c0" }}
                />
            )
        }
        return stars;
    };


    return (
        <main>
            <h2>Risultati della ricerca</h2>
            {movies.length > 0 || tvShows.length > 0 ? (
                <div className="containerCard" >
                    {[...movies, ...tvShows].map(movie => (
                        <div className="card" key={movie.id}>

                            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title || movie.name} />
                            <div className="infoCard">
                                <h3>{movie.title || movie.name}</h3>
                                <p><strong>Titolo Originale:</strong> {movie.original_title || movie.original_name}</p>
                                <p>
                                    {getFlag(movie.original_language) ? (
                                        <Flag
                                            code={getFlag(movie.original_language)}
                                            style={{ width: "50px", height: "35px" }}
                                        />
                                    ) : (
                                        <img src="./../bandiera_pirata.avif" alt="Flag not found" style={{ width: "30px", height: "20px" }} />
                                    )}
                                </p>
                                <p><strong>Voto:</strong>
                                    {generateStars(movie.vote_average)}
                                </p>

                                <p><strong>Tipo:</strong> {movie.type === "movie" ? "Film" : "Serie TV"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h3>Nessun film o serie tv trovata</h3>
            )}
        </main>
    );
}
