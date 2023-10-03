import { useState } from 'react'
import './Contato.css'
import EuLinda from '..//img/eulinda.webp'
export default function Contato() {
    
    const []=useState("")

   
    return (
        <>
        <main className='area-form'>
            <div>
                <img className='fotominha' src={EuLinda} alt="" />
            </div>
        <form className='formulario' action="/contato">
            <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" />
            </div>
            <div>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" />
            </div>
            <div>
            <label htmlFor="texto">Digite sua mensagem:</label>
            <input type="text" />
            </div>
            <div className="button">
            <button type="submit">Enviar</button>
            </div>
        </form>
        </main>
        </>
    )
}