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
        <h1 className='titulo'>Olá! Entre em contato comigo por aqui :)</h1>
            <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" placeholder='Digite seu nome!' required/>
            </div>
            <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder='Informe seu e-mail' required/>
            </div>
            <div className='final-dapartedecima'>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="phone" name="phone" pattern="\(\d{2}\) \d{5}-\d{4}" required placeholder='Digite no formato: (xx) xxxxx-xxxx'/>
            </div>
            <label htmlFor="texto">Digite sua mensagem:</label>
            <div>
            <input className='mensagem' type="text" placeholder='Fale comigo!' required/>
            </div>
            <div className="button">
            <button className='button' type="submit">Enviar</button>
            </div>
        </form>
        </main>
        </>
    )
}