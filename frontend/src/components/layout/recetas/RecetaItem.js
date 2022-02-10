import '../../../styles/components/layout/Card.css'

const RecetaItem = (props) => {
    const { titulo, ingredientes, imagen, preparacion } = props;
    return(
        <div className='receta'>
            <div className='tituloReceta'>
                <h3>{titulo}</h3>
            </div>
            <div className='imagenReceta'>
                <img src={imagen}/>
            </div>
            <div className='ingredientesReceta'>    
                <h4>Ingredientes</h4>
                <ul>
                    <li>{ingredientes}</li>
                </ul>
            </div>
            <div className='pasosReceta'>
                <h4>Pasos a seguir</h4>
                <p dangerouslySetInnerHTML={{ __html: preparacion}}/>
            </div>
        </div>
    );
}

export default RecetaItem;