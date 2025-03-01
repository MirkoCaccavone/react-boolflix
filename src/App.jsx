// Import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import del layout di default
import DefaultLayout from "./layouts/DefaultLayout";

// Import del contesto globale
import { GlobalProvider } from "./context/GlobalContext"

// Import dei componenti delle pagine
import Homepage from "./pages/Homepage"
import MoviePage from "./pages/MoviePage";
import SerieTvPage from "./pages/SerieTvPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    // Wrappa l'applicazione con il GlobalProvider per fornire il contesto globale
    <GlobalProvider>
      {/* Configura il router per la gestione delle rotte */}
      <BrowserRouter>
        <Routes>
          {/* Definisce il layout di default per le rotte */}
          <Route element={<DefaultLayout />}>
            {/* Definisce la rotta per la homepage */}
            <Route index element={<Homepage />} />
            {/* Definisce la rotta per la pagina dei film */}
            <Route path="/film" element={<MoviePage />} />
            {/* Definisce la rotta per la pagina delle serie TV */}
            <Route path="/serietv" element={<SerieTvPage />} />
            {/* Definisce la rotta per la pagina dei dettagli del film/serie TV */}
            <Route path="/dettagli/:id/:type" element={<MovieDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
