import { useState } from "react";

// importiamo il contesto creato (Global)
import GlobalContext from "./context/GlobalContext"

// importiamo il componente homepage
import Homepage from "./pages/Homepage"


function App() {

  const [movies, setMovies] = useState([]);

  // Funzione per cercare i film
  const searchMovies = (query) => {
    const API_KEY = "8c47c3edf240ccafa806b2613f7a2602";
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => setMovies(data.results)) // Impostiamo i risultati dei film
      .catch(err => console.log(err));
  };
  return (

    <GlobalContext.Provider value={{ movies, searchMovies }}>
      <Homepage />
    </GlobalContext.Provider>

  )
}

export default App
