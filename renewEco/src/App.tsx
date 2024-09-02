import Header from '../src/Components/Header'
import Slider from '../src/Components/Slider'
import Footer from './Components/Footer'
import Cards from './Components/Cards'

import './style.css'

function App() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
    <div id="duvidas">
        <h2 id="sobre">Sobre Nós</h2>
        <p>
            Somos um projeto de TCC do curso de Informática da FAETEC Volta Redonda, dedicado a facilitar o descarte correto de eletrônicos<br/>
            defeituosos ou inutilizáveis. Nosso foco é conectar você com empresas especializadas em sua região, que realizam o descarte de forma<br/>
            responsável e ambientalmente correta. Com nossa plataforma, ajudamos a simplificar o processo, garantindo que seus resíduos eletrônicos<br/>
            tenham o destino adequado, contribuindo para a sustentabilidade e proteção do meio ambiente.
        </p>
        <h2 id="frequencia">Dúvidas Frequentes</h2>
    </div>
      <Cards></Cards>
      <Footer></Footer>
    </>
  )
}

export default App
