const HomePage = (props) => {
    return(
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/portada.jpg" alt="portada"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenido!</h2>
                    <p>¿No se te ocurre qué cocinar? Llegaste al lugar correcto</p>
                </div>
                <div className="testimonios right">
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
        </main>
    );
}

export default HomePage;