// Importa useEffect, useState e useContext da React
import { useEffect, useState, useContext } from "react";
// Importa useParams da React Router per ottenere i parametri dell'URL
import { useParams } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

export default function MovieDetailsPage() {
    // Ottiene l'ID e il tipo (movie/tv) del film dall'URL
    const { id, type } = useParams();
    // Estrae la funzione getMovieCast dal contesto globale
    const { getMovieCast } = useContext(GlobalContext);
    // Stato per memorizzare il cast del film o della serie TV
    const [cast, setCast] = useState([]);

    // Effettua il fetch del cast al montaggio del componente e quando cambiano id o type
    useEffect(() => {
        getMovieCast(id, type, setCast);
    }, [id, type, getMovieCast]);

    return (
        <div>
            <h1>Dettagli {type === "movie" ? "del Film" : "della Serie TV"}</h1>
            <h3>Cast:</h3>
            {/* Controlla se il cast è disponibile */}
            {cast.length > 0 ? (
                <ul>
                    {/* Mappa su cast per creare una lista di attori */}
                    {cast.map(actor => (
                        <li key={actor.id}>
                            {/* Controlla se esiste un'immagine per l'attore */}
                            {actor.profile_path ? (
                                <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} width="50" />
                            ) : (
                                <p>Nessuna immagine disponibile</p>
                            )}
                            {actor.name} - <em>{actor.character}</em>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Cast non disponibile</p>
            )}
        </div>
    );
}
