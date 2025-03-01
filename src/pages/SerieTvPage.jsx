// Importa il componente SerieTvComponents
import SerieTvComponents from "../components/SerieTvComponents";

// Componente SerieTvPage per visualizzare la pagina delle serie TV
export default function SerieTvPage() {
    return (
        <div>
            {/* Componente per visualizzare i risultati della ricerca delle serie TV */}
            <SerieTvComponents />
        </div>
    )
}