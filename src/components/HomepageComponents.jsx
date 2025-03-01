// Importa useContext da React e il contesto globale
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import MediaCard from "./MediaCard";

// Componente HomepageComponents per visualizzare i risultati della ricerca
export default function HomepageComponents() {
    // Estrae movies e tvShows dal contesto globale
    const { movies, tvShows } = useContext(GlobalContext);

    return (
        <main>
            <h2>Risultati della ricerca</h2>
            {/* Controlla se ci sono film o serie TV da mostrare */}
            {movies.length > 0 || tvShows.length > 0 ? (
                <div className="containerCard">
                    {/* Mappa su movies e tvShows per creare una MediaCard per ciascun media */}
                    {[...movies, ...tvShows].map((media) => (

                        // utilizziamo 'key' per identificare univocamente ogni elemento della lista e
                        // 'media' è l'oggetto che contiene tutte le informazioni del film o della serie TV
                        <MediaCard key={media.id} media={media} />
                    ))}
                </div>
            ) : (
                <h3>Nessun film o serie tv trovata</h3>
            )}
        </main>
    );
}

