import '../style.css'
import insta from '../assets/insta.png'
import face from '../assets/face.png'
import linkedin from '../assets/linkedin.jpg'

function Footer() {

  return (
    <>
    <footer>
        <section>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Soluções</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Para Empresas</a></li>
                </ul><br/>
                <h4>RenewEco - 2024</h4>
            </nav>
            <nav>
                <ul>
                    <li><a href="">Sobre a FAETEC</a></li>
                </ul>
            </nav>
            <nav id="icone">
                <a href="#"><img src={insta} alt="insta"/></a>
                <a href="#"><img src={face} alt="face"/></a>
                <a href="#"><img src={linkedin} alt="linkedin"/></a>
            </nav>
        </section>
    </footer>
    </>
  )
}

export default Footer
