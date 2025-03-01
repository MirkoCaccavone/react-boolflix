// Importa le icone FontAwesome e il componente Link di React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

// Funzione per ottenere il codice della bandiera in base alla lingua
const getFlag = (language) => {
    const flags = {
        en: "GB",
        it: "IT",
        es: "ES",
    };
    return flags[language];
};

// Funzione per generare le stelle di valutazione
const generateStars = (voteAverage) => {
    const fullStars = Math.ceil(voteAverage / 2);
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{ color: i < fullStars ? "#ffff80" : "#c0c0c0" }}
            />
        );
    }
    return stars;
};

// Componente MediaCard per visualizzare le informazioni di un film o di una serie TV
export default function MediaCard({ media }) {
    return (
        <div className="card" key={media.id}>
            {/* Controlla se esiste un poster per il media */}
            {media.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w342${media.poster_path}`}
                    alt={media.title || media.name}
                />
            ) : (
                <div className="no-image">
                    {/* Mostra un'icona triste se non c'è un'immagine disponibile */}
                    <FontAwesomeIcon icon={faFrown} className="icon-sad" />
                    <br />
                    Immagine non disponibile
                </div>
            )}

            <div className="infoCard">
                <h3>{media.title || media.name}</h3>
                <p>
                    {/* Mostra la bandiera della lingua originale del media */}
                    {getFlag(media.original_language) ? (
                        <Flag
                            code={getFlag(media.original_language)}
                            style={{ width: "30px", height: "20px" }}
                        />
                    ) : (
                        <img
                            src="./../bandiera_pirata.avif"
                            alt="Flag not found"
                            style={{ width: "30px", height: "20px" }}
                        />
                    )}
                </p>
                <p>
                    <strong>Voto:</strong>
                    {generateStars(media.vote_average)}
                </p>
                <p>
                    <strong>Tipo:</strong> {media.type === "movie" ? "Film" : "Serie TV"}
                </p>
                <p>
                    <strong>Descrizione:</strong>
                    <br />
                    {media.overview}
                </p>
                {/* Link per vedere i dettagli del cast */}
                <Link to={`/dettagli/${media.id}/${media.type}`} className="details-link">
                    Vedi Cast
                </Link>
            </div>
        </div>
    );
}