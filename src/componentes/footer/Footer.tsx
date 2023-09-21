import './Footer.css';
import EllenLogo from '..//img/ellen-logo.png';
import faceLogo from '..//img/facebook.png';
import instaLogo from '..//img/instagram.png';
import ttLogo from '..//img/twitter.png';
import ytLogo from '..//img/youtube.png';

function Footer(){
  return(
    <footer className="rodape">
      <div className='bloco1'>
        <img className="logo" src={EllenLogo} alt="Ellen Logo" />
        <p className='p1'>Aqui no site da Ellen, você encontra tudo sobre mim! <br />
        Portfólio da Ellen - Conhecimento em Destaque. <br />
        Do Aprendizado à Excelência, com Ellen você encontra!</p>
        <div className='redes-sociais'>
            <img className='face' src={faceLogo} alt="facebook" />
            <img className='insta' src={instaLogo} alt="instagram" />
            <img className='yt' src={ytLogo} alt="youtube" />
            <img className='tt' src={ttLogo} alt="twitter" />
        </div>
        <p className='p2'>© 2018 - 2023 AppEllen®</p>
      </div>

      <div className='blocao'>

      <div className='bloco-links'>
      <div className='bloco2'>
       <p>Projetos</p>
       <a href="#">Protótipos Figma</a>
       <a href="#">Sites</a>
       <a href="#">Softwares</a>
       <a href="#">Seção Desenvolvimento</a>
      </div>

      <div className='bloco3'>
      <p>Contatos</p>
       <a href="#">Email</a>
       <a href="#">Caixa Postal</a>
       <a href="#">Parcerias</a>
      </div>

      <div className='bloco4'>
       <p>História</p>
       <a href="#">Tudo sobre mim</a>
       <a href="#">Linha do Tempo</a>
       <a href="#">Sobre a empresa</a>
      </div>
      </div>

      <div className='parte-embaixo'>
      
      <a href="#">Termos de Uso</a>
      <a href="#">Políticas de Privacidade</a>
      <p className='p-idioma'>֍ Português-BR ⌵</p>
      </div>
      </div>
      
    </footer>
  )
}

export default  Footer
