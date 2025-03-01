// Importa useContext da React e il contesto globale
import { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import MediaCard from "./MediaCard";

// Componente SerieTvComponents per visualizzare i risultati della ricerca delle serie TV
export default function SerieTvComponents() {
    // Estrae tvShows dal contesto globale
    const { tvShows } = useContext(GlobalContext);

    return (
        <main>
            <h2>Risultati della ricerca</h2>
            {/* Controlla se ci sono serie TV da mostrare */}
            {tvShows.length > 0 ? (
                <div className="containerCard">
                    {/* Mappa su tvShows per creare una MediaCard per ciascuna serie TV */}
                    {tvShows.map((tvShow) => (

                        // utilizziamo 'key' per identificare univocamente ogni elemento della lista e
                        // 'media' è l'oggetto che contiene tutte le informazioni delle serie TV
                        <MediaCard key={tvShow.id} media={tvShow} />
                    ))}
                </div>
            ) : (
                <h3>Nessuna serie TV trovata</h3>
            )}
        </main>
    );
}


