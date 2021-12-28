import '../../styles/components/layout/Card.css'

const Card = (props) => {
    return(
        <div className='receta'>
            <img src='img/recetas/pizza.jpg' alt='pizza'/>
            <div className='tituloReceta'>
                <h3>Pizza casera</h3>
            </div>
            <div className='ingredientesReceta'>    
                <h4>Ingredientes</h4>
                <ul>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                </ul>
            </div>
            <div className='pasosReceta'>
                <h4>Pasos a seguir</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nibh vel tortor lacinia tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est ac ante dignissim pharetra ut non tellus. Vivamus pellentesque lectus id aliquam commodo. Donec congue vitae nulla id tincidunt.</p>
            </div>
        </div>
    );
}

export default Card;