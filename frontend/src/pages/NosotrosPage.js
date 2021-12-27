import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return(
        <section>
            <div className="historia">
                <h2>Nuestra historia</h2>
                <p><i>¿Qué comemos?&nbsp;</i> es un proyecto que une a dos chef profesionales con un sinnúmero de cocineros hogareños.</p>
                <p>Raúl y Francisca son especialistas en gastronomía. Ambos tienen gran experiencia trabajando en los restaurantes más conocidos del país (y del mundo).</p>
                <p>Pero, al igual que a vos, el mundo se les cae cuando tienen que hallar respuesta a la gran pregunta: <br></br><b>"Qué comemos?"</b></p>
            </div>
            <div className="holder">
                <h2 class="sobreNosotros">Sobre nosotros...</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/chef1.jpeg" width="75" alt="Raul"/>
                        <h5>Raúl Florez</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper est massa, vel ultricies erat rhoncus a. In vel augue arcu. Nulla sem enim, tincidunt sit amet rhoncus a, fringilla vehicula justo. Sed posuere fermentum metus nec semper. Donec vitae erat sem. Nunc porttitor tellus id est porta, non gravida urna mattis. Curabitur feugiat ac leo a pellentesque. Sed lobortis congue quam, in suscipit dolor dignissim a.</p>
                        <p>
                        Fusce et ipsum at metus commodo imperdiet. Pellentesque a neque ut eros accumsan sollicitudin. Nunc vel risus arcu. Vestibulum aliquet vulputate ante ac blandit. Donec sed augue condimentum, vehicula nisi eget, vestibulum urna. Sed vitae ipsum ut felis egestas porttitor eget ut nisi. Nullam non vehicula erat, vulputate cursus ligula. Nunc dapibus nulla laoreet, ornare lacus at, elementum nibh. Aenean commodo dolor non eros fringilla venenatis. Duis malesuada, turpis at convallis ornare, odio orci mollis tellus, nec dictum metus libero sed ligula. Phasellus varius mattis odio ac facilisis. Praesent id elit id libero sollicitudin congue sed quis metus..</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/chef2.jpeg" width="75" alt="Francisca"/>
                        <h5>Francisca Mendoza</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper est massa, vel ultricies erat rhoncus a. In vel augue arcu. Nulla sem enim, tincidunt sit amet rhoncus a, fringilla vehicula justo. Sed posuere fermentum metus nec semper. Donec vitae erat sem. Nunc porttitor tellus id est porta, non gravida urna mattis. Curabitur feugiat ac leo a pellentesque. Sed lobortis congue quam, in suscipit dolor dignissim a.</p>
                        <p>
                        Fusce et ipsum at metus commodo imperdiet. Pellentesque a neque ut eros accumsan sollicitudin. Nunc vel risus arcu. Vestibulum aliquet vulputate ante ac blandit. Donec sed augue condimentum, vehicula nisi eget, vestibulum urna. Sed vitae ipsum ut felis egestas porttitor eget ut nisi. Nullam non vehicula erat, vulputate cursus ligula. Nunc dapibus nulla laoreet, ornare lacus at, elementum nibh. Aenean commodo dolor non eros fringilla venenatis. Duis malesuada, turpis at convallis ornare, odio orci mollis tellus, nec dictum metus libero sed ligula. Phasellus varius mattis odio ac facilisis. Praesent id elit id libero sollicitudin congue sed quis metus..</p>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </section>
    );
}

export default NosotrosPage;