const NosotrosPage = (props) => {
    return(
        <section className="holder">
            <div className="historia">
                <h2>Nuestra historia</h2>
                <p><i>Qué comemos?</i> es un proyecto que une a dos chef profesionales con un sinnúmero de cocineros hogareños.</p>
                <p>Raúl y Francisca son especialistas en gastronomía. Ambos tienen gran experiencia trabajando en los restaurantes más conocidos del país (y del mundo).</p>
                <p>Pero, al igual que a vos, el mundo se les cae cuando tienen que hallar respuesta a la gran pregunta: <b>"Qué comemos?"</b></p>
            </div>
            <h2>Sobre nosotros...</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/chef1.jpeg" width="75" alt="Raul"/>
                    <h5>Raúl Florez</h5>
                    <p>Tempor labore ad ut occaecat non id incididunt nisi. Enim laborum deserunt cillum nulla. Magna aute ad dolor ea et et. Non proident consequat mollit ea aliqua aute voluptate est magna ad laboris commodo est.</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/chef2.jpeg" width="75" alt="Francisca"/>
                    <h5>Francisca Mendoza</h5>
                    <p>Tempor labore ad ut occaecat non id incididunt nisi. Enim laborum deserunt cillum nulla. Magna aute ad dolor ea et et. Non proident consequat mollit ea aliqua aute voluptate est magna ad laboris commodo est.</p>
                </div>
            </div>
        </section>
    );
}

export default NosotrosPage;