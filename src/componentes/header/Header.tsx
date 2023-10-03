import './Header.css'
import EllenLogo from '..//img/ellen-logo.png';
import LinkNav from '..//linknav/LinkNav'
function Header(){
    return (
        <header>
            <div>
                <img className='logo-topo' src={EllenLogo} alt="" />
            </div>
            <nav>
                <ul>
           
                    <li>
                    <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                    <LinkNav url="/noticias" texto='Trabalhos'/>
                    </li>
                    <li>
                    <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                    <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default  Header


