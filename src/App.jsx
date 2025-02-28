// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo useState per gestire lo stato
import { useState } from "react";

// importiamo il contesto creato (Global)
import GlobalContext from "./context/GlobalContext"

// importiamo il componente homepage
import Homepage from "./pages/Homepage"
import MoviePage from "./pages/MoviePage";
import SerieTvPage from "./pages/SerieTvPage";


function App() {

  const API_KEY = "8c47c3edf240ccafa806b2613f7a2602";


  // settiamo lo stato movies per salvare l'elenco dei film e serie TV
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  // Funzione per cercare SOLO i film
  const searchMovies = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        const moviesData = data.results.map(item => ({ ...item, type: 'movie' }));
        setMovies(moviesData);
      })
      .catch(err => console.log(err));
  };

  // Funzione per cercare SOLO le serie TV
  const searchTVShows = (query) => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        const tvData = data.results.map(item => ({ ...item, type: 'tv' }));
        setTvShows(tvData);
      })
      .catch(err => console.log(err));
  };

  // Funzione per cercare ENTRAMBI
  const searchMoviesAndTV = (query) => {
    searchMovies(query);
    searchTVShows(query);
  };

  return (

    <GlobalContext.Provider value={{ movies, tvShows, searchMovies, searchTVShows, searchMoviesAndTV }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/film" element={<MoviePage />} />
          <Route path="/serietv" element={<SerieTvPage />} />

        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>

  )
}

export default App
