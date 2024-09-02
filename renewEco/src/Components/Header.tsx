import logo from '../assets/logo.png'
import '../style.css'

function Header() {

  return (
    <>
    <header>
        <nav>
            <img src={logo}/>
            <ul id='nav-list'>
                <li><button>Home</button></li>
                <li><button>Soluções</button></li>
                <li><button>Sobre</button></li>
                <li><button>Contato</button></li>
            </ul>
            <div id='log'>
                <button id='Entrar'>Entrar</button>
                <button>Registrar</button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
