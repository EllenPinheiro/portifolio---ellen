import './Projeto.css'
export default function Projeto(props:ProjetoProps){
    return(
        <div className="projeto-content">
         <div className='foto_projeto'>
             <img className="img-projeto" src={props.imagem} alt="" />
         </div>
           
            <div className="text-projeto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.descricao}</p>
            </div>
        </div>
    )
}

type ProjetoProps = {
    titulo:string;
    descricao:string;
    imagem:string
}