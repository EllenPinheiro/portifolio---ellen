import './Header.css'
import EllenLogo from '..//img/ellen-logo.png';
import Link from './link/Link'

function Header(){
    return (
        <header>
            <div>
                <img className='logo-topo' src={EllenLogo} alt="" />
            </div>
            <nav>
                <ul>
           
                    <li>
                    <Link texto='Home'/>
                    </li>
                    <li>
                    <Link texto='Trabalhos'/>
                    </li>
                    <li>
                    <Link texto='Sobre'/>
                    </li>
                    <li>
                    <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default  Header


