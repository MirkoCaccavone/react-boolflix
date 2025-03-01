// Importa il componente MovieComponents
import MovieComponents from "../components/MovieComponents";

// Componente MoviePage per visualizzare la pagina dei film
export default function MoviePage() {
    return (
        <div>
            {/* Componente per visualizzare i risultati della ricerca dei film */}
            <MovieComponents />
        </div>
    )
}