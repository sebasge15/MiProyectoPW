import React from 'react';
import '../componentes/Login.css'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import { Link } from "react-router-dom";

function Login(){
    return(
        <>
        <Header/>
        <div>
            <div className='wrapperL'>
                <form action="">
                    <h4>Ingreso para clientes registrados</h4>
                    <div className='input-boxL'>
                        <input type='text' placeholder='email' required/>
                    </div>
                    <div className='input-boxL'>
                        <input type='password' placeholder='password' required/>
                    </div>
                    <button type='submit'>Ingresar</button>
                    <div className='forgot-passwordL'>
                        <p><a href='#'>Olvidé mi contraseña</a></p>
                    </div>
                    <div className='registerL'>
                    <Link to="/registro">No tengo cuenta deseo registrarme</Link>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Login