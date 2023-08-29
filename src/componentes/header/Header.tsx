import './Header.css'
import BarbieLogo from '..//img/Barbie_Logo.svg.png';
import Link from './link/Link'

function Header(){
    return (
        <header>
            <div>
                <img className='logo-topo' src={BarbieLogo} alt="" />
            </div>
            <nav>
                <ul>
           
                    <li>
                    <Link texto='Home'/>
                    </li>
                    <li>
                    <Link texto='Notícia'/>
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


