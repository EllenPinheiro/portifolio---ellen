import { useState } from 'react';
import './Contato.css';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <>
      <main className='area-form'>
        <div className='fotominha'></div>

        <form className='formulario' action="/contato">
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              placeholder='Digite seu nome!'
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              placeholder='Informe seu e-mail'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='final-dapartedecima'>
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="\(\d{2}\) \d{5}-\d{4}"
              required
              placeholder='Digite no formato: (xx) xxxxx-xxxx'
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <label htmlFor="texto">Digite sua mensagem:</label>
          <div>
            <input
              className='mensagem'
              type="text"
              placeholder='Fale comigo!'
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>
          <div className="button">
            <button className='button' type="submit">Enviar</button>
          </div>
        </form>
      </main>
    </>
  );
}
