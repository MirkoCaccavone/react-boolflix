// Hook di React per gestire lo stato del componente
import { useState, useContext } from "react";

// Importiamo il contesto globale
import GlobalContext from "./../context/GlobalContext";

// Riceviamo setMovies come prop
const MovieForm = () => {

    // Accediamo alla funzione searchMoviesAndTV dal contesto globale
    const { searchMoviesAndTV } = useContext(GlobalContext);

    // Stato per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState({ title: "" });

    // Funzione di gestione delle info dei campi
    function handleFormData(e) {
        // Aggiorna lo stato con i dati del form
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // Funzione di gestione dell'invio dell'intero form per cercare il film
    function handleSubmit(e) {
        e.preventDefault();
        // Eseguiamo la ricerca dei film e serie tv
        searchMoviesAndTV(formData.title);

        // Reset del campo di input
        setFormData({ title: "" });
    }

    return (
        <>
            {/* Form per la ricerca dei film e delle serie TV */}
            <form id="formMovie" action="#" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={handleFormData}
                    value={formData.title}
                    placeholder="cerca film o serie tv"
                />
                <button type="submit">Cerca</button>
            </form>
        </>
    )
}

export default MovieForm

