import { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await

        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return(
        <main className="holder">
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
            <div className="columna contacto">
                <h2>Dejanos tus dudas o sugerencias</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre </label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Email </label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p><p>
                        <label>Telefono </label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Comentario </label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="centrar"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vías de contacto</h2>
                <ul>
                    <li><a href="tel:+541136636476"><i class='icon bx bxs-phone'></i></a></li>
                    <li><a href="mailto:basteiroabril@gmail.com"><i class='icon bx bxs-envelope'></i></a></li>
                    <li><a href="https://www.facebook.com" target="_blank" ><i class='icon bx bxl-facebook-square'></i></a></li>
                    <li><a href="https://www.twitter.com" target="_blank" ><i class='icon bx bxl-twitter' ></i></a></li>
                    <li><a href="https://www.skype.com" target="_blank" ><i class='icon bx bxl-skype' ></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" ><i class='icon bx bxl-instagram-alt' ></i></a></li>
                </ul>
                <div className="imgFrase"> 
                    <img class="frase" src="https://i0.wp.com/www.vinilolandia.com/wp-content/uploads/2017/10/C0030plancha.png?resize=264%2C300&ssl=1"/>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;