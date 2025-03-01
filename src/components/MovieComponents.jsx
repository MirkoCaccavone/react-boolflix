// Importa useState, useEffect e useContext da React
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import MediaCard from "./MediaCard";

// Componente MovieComponents per visualizzare i risultati della ricerca dei film
export default function MovieComponents() {
    // Estrae movies dal contesto globale
    const { movies } = useContext(GlobalContext);

    return (
        <main>
            <h2>Risultati della ricerca</h2>
            {/* Controlla se ci sono film da mostrare */}
            {movies.length > 0 ? (
                <div className="containerCard">
                    {/* Mappa su movies per creare una MediaCard per ciascun film */}
                    {movies.map((movie) => (

                        // utilizziamo 'key' per identificare univocamente ogni elemento della lista e
                        // 'media' è l'oggetto che contiene tutte le informazioni del film
                        <MediaCard key={movie.id} media={movie} />
                    ))}
                </div>
            ) : (
                <h3>Nessun film trovato</h3>
            )}
        </main>
    );
}