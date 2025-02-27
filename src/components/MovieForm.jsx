// Hook di React per gestire lo stato del componente
import { useState, useContext } from "react";
import GlobalContext from "./../context/GlobalContext"; // Importiamo il contesto

// Riceviamo setMovies come prop
const MovieForm = () => {

    // Accediamo alla funzione searchMovies
    const { searchMoviesAndTV } = useContext(GlobalContext);

    // state per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState({ title: "" });


    // funzione di gestione delle info dei campi
    function handleFormData(e) {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // funzione di gestione dell'invio dell'intero form per cercare il film
    function handleSubmit(e) {
        e.preventDefault();
        // Eseguiamo la ricerca dei film e serie tv
        searchMoviesAndTV(formData.title);

        // Reset del campo di input
        setFormData({ title: "" });
    }

    return (
        <>

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

