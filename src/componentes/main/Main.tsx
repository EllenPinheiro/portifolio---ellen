import './Main.css'
import EllenLinda from '..//img/ellen-linda (1).jpeg'
import Ellen1 from '..//img/ellen-linda (2).jpeg'
import Ellen2 from '..//img/WhatsApp Image 2023-08-30 at 08.00.55.jpeg'
import Ellen3 from '..//img/ellen-linda (3).jpeg'
import Portfolio from '..//img/portfolio-removebg-preview.png'

function Main(){
    return(
        <div className='content-all'>
        <div className='content-fotos'>
            <img src={Ellen1} alt=""></img>
            <img src={Ellen2} alt=""></img>
            <img src={Ellen3} alt=""></img>
        </div>

<div className="main-content">
            <div className='portfolio'>
<img src={Portfolio} alt=""></img>
</div>
         <div className='sobre-mim'>
            <p className='titulo-sobremim'>QUEM SOU EU?</p>
            <p className='text-sobremim'> Eu me chamo Ellen Vasconcelos Pinheiro,
tenho 18 anos e <br /> atualmente estou terminando o 3º ano do ensino médio, <br />no curso de Técnico em Informática para Internet no IFMS. <br />
Moro na cidade de Naviraí-MS, com os meus pais e minhas <br />duas irmãs mais novas. Namoro faz 3 anos com meu namorado <br /> lindo Jonas.
Sou uma garota cristã, otimista, dedicada, sonhadora,<br /> extrovertida e estou em constante busca pela felicidade, louvar e <br />adorar meu Senhor Jesus. Eu sonho em ter o meu emprego dos <br /> sonhos, formar uma família e viajar o mundo!</p>
</div>

<div className='fotoellenlinda'>
    <img  src={EllenLinda} alt="Eu"></img>
    </div>
        </div>
        </div>
    )
}

export default Main