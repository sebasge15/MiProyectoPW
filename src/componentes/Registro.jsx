import React from 'react';
import '../componentes/Registro.css'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

function Registro(){
    return(
        <>
        <Header/>
        <div>
            <div className='wrapperR'>
                <form action="">
                    <h4>Registra una cuenta nueva</h4>
                    <div className='input-boxR'>
                        <input type='text' placeholder='Nombre' required/>
                    </div>
                    <div className='input-boxR'>
                        <input type='text' placeholder='Apellido' required/>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='text' placeholder='Correo' required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' placeholder='Password' required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' placeholder='Confim Password' required/>
                        </div>
                    </div>
                    
                    <button type='submit'>Crear Cuenta Nueva</button>
                    
                </form>
            </div>
        </div>
        <Footer/>
       
        </>
    )
}

export default Registro