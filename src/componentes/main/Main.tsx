import { useState } from 'react'
import './Main.css'
import EllenLinda from '..//img/ellen-linda (1).jpeg'
import Ellen1 from '..//img/ellen-linda (2).jpeg'
import Ellen2 from '..//img/WhatsApp Image 2023-08-30 at 08.00.55.jpeg'
import Ellen3 from '..//img/ellen-linda (3).jpeg'
import aviao from '..//img/aviao.jpg'
import aero from '..//img/aero.jpg'
import amigos1 from '..//img/amigos1.jpg'
import amigos2 from '..//img/amigos2.jpg'
import campusfort from '..//img/campusfort.jpg'
import praia from '..//img/praia.jpg'
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
            descricao:"Este projeto de ensino, orientado pelo professor Nicholas Eduardo Lopes dos Santos, onde atuei como integrante no desenvolvimento de um software para gerenciamento da FECINAVI, a Feira de Ciências e Tecnologia de Naviraí. Neste projeto, desenvolvi meu TCC, com um estudo de caso a respeito do Emprego do Método Ordinal Multicritério para Determinação do Ranqueamento dos Trabalhos Científico da Feira de Ciências de Naviraí utilizando um algoritmo programado por mim, que aplica o Método de Copeland.",
            imagem:'/projeto-fecinavi.png'
        },
        {
            id:2,
            titulo:'Navitrine',
            descricao:'Protótipo de Software de Vitrine Digital para o Comércio do Setor de Moda de Naviraí, desenvolvido em algumas matérias do curso técnico de Informática. Inclui os protótipos de tela de média fidelidade e a programação do site no ambiente Replit.',
            imagem:'/navitrine.png'
        },
        {
          id:3,
          titulo:'Pet Shop Amor de Pet',
          descricao:'Este trabalho foi desenvolvido na matéria de Fundamentos de Projeto de Interface Gráfica, como um layout para o website de um pet shop, utilizando a ferramenta Figma.',
          imagem:'/amordepet.png'
      },
      {
        id:4,
        titulo:'GAVECH',
        descricao:'O GAVECH, é um protótipo de site, um trabalho em grupo na matéria de Fundamentos de Projeto de Interface Gráfica, no qual desenvolvemos wirwframes de média e alta fidelidade com o tema de vestuário, utilizando a ferramenta Figma.',
        imagem:'/gavech.png'
    },
    {
      id:5,
      titulo:'Receitas da Ellen',
      descricao:'O receitas da Ellen, trabalho de minha autoria exclusiva, compreende um trabalho desenvolvido em diversas matérias no curso, onde eu pude explorar desde a prototipação dos wireframes até a programação do site, especialmente na linguagem JavaScript.',
      imagem:'/receitas da ellen.png'
  },
  {
    id:6,
    titulo:'Len Play',
    descricao:'Ao longo do curso técnico do IFMS fiz trabalhei muito com o desenvolvimento de sites de streaming e este layout foi um dos primeiros que desenvolvi no ambiente Figma.',
    imagem:'/lenplay.png'
},
{
  id:7,
  titulo:'Moodboard',
  descricao:'Na matéria de ferramentas de desenho no curso, desenvolvi meu moodboard, meu manual de identidade visual, aplicando conceitos de arquétipo. Este trabalho contou com a ideação de uma logo.',
  imagem:'/moodboard.png'
},
{
  id:8,
  titulo:'Jogo da Memória Ecoconsciente',
  descricao:'Trabalho em grupo desenvolvido na matéria de biologia, onde tivemos que desenvolver um jogo utilizando ferramentas de informática. Realizamos um jogo da memória projetado inicialmente no Figma e depois projetado para confeccioná-lo na CNC Laser Laboratório Maker do IFMS.',
  imagem:'/memoria.png'
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
Sou uma garota cristã, otimista, dedicada, sonhadora,<br /> extrovertida e estou em constante busca pela felicidade, louvar e <br />adorar meu Senhor Jesus. Eu sonho em ter o meu emprego dos <br /> sonhos, formar uma família e viajar o mundo! <br />
Atualmente tenho a aspiração de trabalhar com a área <br /> da informática e quero fazer faculdade de engenharia da computação.</p>
</div>

<div className='fotoellenlinda'>
    <img  src={EllenLinda} alt="Eu"></img>
    </div>
        </div>
</div>
<h1>Alguns dos meus projetos:</h1>
            <div className="campo_pesquisa">
                <p>Busque um projeto:</p>
                <div className='quadradinho'>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Qual projeto você deseja procurar?'
                       onChange={TrataTexto} />
                </div>
                <div>
                       <img className='lupa' src={Lupa} alt="" />
                </div>
            </div>
            <div className='exibindo'>
            {texto && <p className='text-resultados'>Exibindo resultados para: </p>}
            </div>
            <div className='resultados'>
            {texto}
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

      <main>
        <h1>Viagens IFMS</h1>

  <div className='bloco-viagem-fortaleza'>
    <div className='slider'>
      <img className='selected' src={amigos1} alt="" />
      <img src={aviao} alt="" />
      <img src={campusfort} alt="" />
      <img src={aero} alt="" />
      <img src={amigos2} alt="" />
      <img src={praia} alt="" />
    </div>
  </div>

      


</main>
      
    </>
  )
}
