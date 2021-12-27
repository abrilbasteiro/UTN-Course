import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return(
        <main>
            <div className="homeimg">
                <img src="img/home/portada.jpg" alt="portada"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>¡Bienvenido!</h2>
                    <p>¿No se te ocurre qué cocinar? <br></br>Llegaste al lugar correcto</p><br></br>
                    <p>En <i>¿Qué comemos? &nbsp;</i> vas a poder guardar tus recetas favoritas y compartir con el resto de los usuarios el paso a paso de ese plato que nunca te falla.</p>
                </div>
                <div className="testimonios">
                    <h2>Nuestros suscriptores opinan:</h2>
                    <div className="testimonio">
                        <span className="cita">"Es justo lo que necesitaba!" - </span>
                        <span className="autor">Matilde González</span>
                    </div>
                    <div className="testimonio">
                        <span className="cita">"Me encantó. Tengo todas las recetas a mano y me da ideas cuando no sé qué cocinar" - </span>
                        <span className="autor">Alejandro Lascano</span>
                    </div>
                </div>
            </div>
            <div className='clear'></div>
        </main>
    );
}

export default HomePage;