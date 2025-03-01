// Importa le funzioni necessarie da React
import { createContext, useState, useEffect } from "react";

// Crea il contesto globale
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // Chiave API per The Movie Database
    const API_KEY = "8c47c3edf240ccafa806b2613f7a2602";
    // Stato per memorizzare i film 
    const [movies, setMovies] = useState([]);
    // Stato per memorizzare le serie TV 
    const [tvShows, setTvShows] = useState([]);

    // Funzione per ottenere i film popolari
    const getPopularMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // Aggiunge il tipo 'movie' a ciascun film
                const moviesData = data.results.map(item => ({ ...item, type: 'movie' }));
                setMovies(moviesData);
            })
            .catch(error => console.error("Errore nel recupero dei film popolari:", error));
    };

    // Funzione per ottenere le serie TV popolari
    const getPopularTvShows = () => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // Aggiunge il tipo 'tv' a ciascuna serie TV
                const tvData = data.results.map(item => ({ ...item, type: 'tv' }));
                setTvShows(tvData);
            })
            .catch(error => console.error("Errore nel recupero delle serie TV popolari:", error));
    };

    // Effettua il fetch dei film e delle serie TV popolari al montaggio del componente
    useEffect(() => {
        getPopularMovies();
        getPopularTvShows();
    }, []);

    // Funzione per cercare i film
    const searchMovies = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
            .then(res => res.json())
            .then(data => {
                // Aggiunge il tipo 'movie' a ciascun film
                const moviesData = data.results.map(item => ({ ...item, type: 'movie' }));
                setMovies(moviesData);
            })
            .catch(err => console.log(err));
    };

    // Funzione per cercare le serie TV
    const searchTVShows = (query) => {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`)
            .then(res => res.json())
            .then(data => {
                // Aggiunge il tipo 'tv' a ciascuna serie TV
                const tvData = data.results.map(item => ({ ...item, type: 'tv' }));
                setTvShows(tvData);
            })
            .catch(err => console.log(err));
    };

    // Funzione per cercare sia i film che le serie TV
    const searchMoviesAndTV = (query) => {
        searchMovies(query);
        searchTVShows(query);
    };

    // Funzione per ottenere il cast di un film o di una serie TV
    const getMovieCast = (id, type, setCast) => {
        const endpoint = type === "movie" ? "movie" : "tv";
        fetch(`https://api.themoviedb.org/3/${endpoint}/${id}/credits?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => setCast(data.cast.slice(0, 5)))
            .catch(error => console.error("Errore nel recupero del cast:", error));
    };

    return (
        // Fornisce il contesto globale ai componenti figli
        <GlobalContext.Provider value={{ movies, tvShows, searchMovies, searchTVShows, searchMoviesAndTV, getMovieCast }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;