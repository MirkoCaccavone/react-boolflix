// importiamo useState per gestire lo stato
import { useState } from "react";

// importiamo il contesto creato (Global)
import GlobalContext from "./context/GlobalContext"

// importiamo il componente homepage
import Homepage from "./pages/Homepage"


function App() {

  // settiamo lo stato movies per salvare l'elenco dei film e serie TV
  const [movies, setMovies] = useState([]);

  // Funzione per cercare sia i film che le serie TV
  const searchMoviesAndTV = (query) => {
    const API_KEY = "8c47c3edf240ccafa806b2613f7a2602";

    // Chiamata per i film
    //fetch(...) → Fa una richiesta GET all'API di TMDb per cercare film basati sulla query.
    //.then(data => data.results) → Estrae il campo results, che è un array di oggetti rappresentanti i film trovati.
    //moviePromise contiene questa promessa di array di film.
    const moviePromise = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => data.results);

    // Chiamata per le serie TV
    const tvPromise = fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => data.results);

    // Aspettiamo entrambe le chiamate API e poi aggiorniamo lo stato
    Promise.all([moviePromise, tvPromise])
      .then(([moviesData, tvData]) => {
        const combinedResults = [
          ...moviesData.map(item => ({ ...item, type: 'movie' })),
          ...tvData.map(item => ({ ...item, type: 'tv' }))
        ];
        setMovies(combinedResults); // Impostiamo i risultati combinati
      })
      .catch(err => console.log(err));
  };

  return (

    <GlobalContext.Provider value={{ movies, searchMoviesAndTV }}>
      <Homepage />
    </GlobalContext.Provider>

  )
}

export default App
