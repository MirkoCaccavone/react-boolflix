// Import di Outlet dalla libreria react-router-dom per il rendering delle rotte figlie
import { Outlet } from "react-router-dom"

// Import del componente Header
import Header from "./../components/Header";

export default function DefaultLayout() {
    return (
        <div>
            {/* Componente Header visualizzato in tutte le pagine */}
            <Header />
            {/* Outlet renderizza il componente della rotta corrente */}
            <Outlet />
        </div>
    );
}