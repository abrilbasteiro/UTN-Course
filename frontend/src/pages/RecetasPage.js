import '../styles/components/pages/RecetasPage.css'
import Card from '../components/layout/Card';

// import NosotrosPage from "./NosotrosPage";

const RecetasPage = (props) => {
    return(
        <section className="holder recetas">
            <h2>Recetas</h2>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    );
}

export default RecetasPage;