import { useState } from 'react'
import './Main.css'
import EllenLinda from '..//img/ellen-linda (1).jpeg'
import Ellen1 from '..//img/ellen-linda (2).jpeg'
import Ellen2 from '..//img/WhatsApp Image 2023-08-30 at 08.00.55.jpeg'
import Ellen3 from '..//img/ellen-linda (3).jpeg'
import Portfolio from '..//img/portfolio-removebg-preview.png'
import Projeto from './../projetos/Projeto'
import Lupa from '..//img/download.png'

type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
  }

export default function Main(){
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Projeto de Ensino - Prática no Desenvolvimento de Software',
            descricao:"Este projeto de ensino, orientado pelo professor Nicholas Eduardo Lopes dos Santos, onde atuei como integrante no desenvolvimento de um software para gerenciamento da FECINAVI, a Feira de Ciências e Tecnologia de Naviraí. Neste projeto, desenvolvi meu TCC, com um estudo de caso a respeito do Emprego do Método Ordinal Multicritério para Determinação do Ranqueamento dos Trabalhos Científico da Feira de Ciências de Naviraí utilizando um algoritmo programado por mim, que aplica o Método de Copeland",
            imagem:'/projeto-fecinavi.png'
        },
        {
            id:2,
            titulo:'Barbie Live Action',
            descricao:'No fabuloso live-action da boneca mais famosa do mundo, acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear com as amigas e curtir intermináveis festas.',
            imagem:'/barbie (1).png'
        },
        {
          id:3,
          titulo:'Barbie Escola de Princesas',
          descricao:'Blair é uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas. A escola é um lugar incrível, onde as meninas aprendem dança, etiqueta, arte e outras habilidades indispensáveis a uma princesa. Blair adora suas aulas, suas novas fadinhas assistentes e suas novas amigas, as princesas Hadley e Isla. Porém, quando a malvada Dama Devin desconfia que Blair é a princesa e herdeira desaparecida, ela faz de tudo para impedir que Blair assuma o trono.',
          imagem:'/BarbieEscola.jpg'
      }
    ]
  
      //O parâmetro "e" da minha função será o meu evento que ocorreu
      function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
          //console.log(e.target.value)
          //Como eu faço para mudar o texto para "TERE"
          setTexto(e.target.value)
      }
    return (
        <>
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
            <div className="campo_pesquisa">
                <p>Busque um projeto:</p>
                <div className='quadradinho'>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />
                <div>
                       <img className='lupa' src={Lupa} alt="" />
                </div>
                </div>
                {texto && <p className='text-resultados'>Exibindo resultados para: {texto} </p>}
            </div>
            <main className="content-main">

            {projetos.filter((projeto) => {
    const textoSemEspacos = texto.replace(/\s/g, ''); // Remove espaços em branco do texto
    const tituloSemEspacos = projeto.titulo.replace(/\s/g, ''); // Remove espaços em branco do título do projeto
    return tituloSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     })
                     .map((projeto) => (
                     <Projeto key={projeto.id} titulo={projeto.titulo} descricao={projeto.descricao} imagem={projeto.imagem} />
                     ))}

      </main>
    </>
  )
}
