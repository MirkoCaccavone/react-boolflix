// importiamo lo useState
import { useState } from "react";

// importiamo i componenti
import Header from "../components/Header";
import Main from "../components/Main";


export default function Homepage() {
    // Stato per i film trovati
    const [movies, setMovies] = useState([]);
    return (
        <>

            {/* Passiamo la funzione per aggiornare i film */}
            <Header setMovies={setMovies} />
            {/* // Passiamo i film trovati al Main */}
            <Main movies={movies} />
        </>
    )

}