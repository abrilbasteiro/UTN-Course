import { useState, useEffect } from 'react';
import axios from 'axios';
import RecetaItem from '../components/layout/recetas/RecetaItem';

import '../styles/components/pages/RecetasPage.css'

// import NosotrosPage from "./NosotrosPage";

const RecetasPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        const cargarRecetas = async () => {
            setLoading(true);
            //const response = await axios.get(`$process.env.REACT_APP_API_URL}/api/recetas`);
            const response = await axios.get('http://localhost:3000/api/recetas');
            setRecetas(response.data);
            setLoading(false);
        };
        cargarRecetas();
    }, []);

    return(
        <section className="holder recetas">
            <h2>Recetas</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                recetas.map(item => <RecetaItem key={item.id}
                    titulo={item.titulo} imagen={item.imagen} ingredientes={item.ingredientes} preparacion={item.preparacion} />)
            )}

        </section>
    );
}

export default RecetasPage;