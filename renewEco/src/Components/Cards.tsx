import '../style.css'
import svg1 from '../assets/SVG/1.svg'
import svg2 from '../assets/SVG/2.svg'
import svg3 from '../assets/SVG/3.svg'

function Cards() {

  return (
    <>
    <article>
        <div id="card">
            <div id="icon">
                <img src={svg1} alt="01"/>
            </div>
            <div id="content">
                <h3>
                    Como Devo Realizar<br/>
                    Meu Descarte?
                </h3>
                <p>Para se livrar do seu lixo eletrônico de forma fácil e segura, é só seguir alguns passos simples. Primeiro, faça seu cadastro no RenewEco. Depois, dê uma olhada nas datas de coleta para saber quando é a hora certa de colocar seu lixo eletrônico na rua. Assim, você garante que tudo vai ser feito de maneira correta e responsável.</p>
            </div>
            <button id="read_button">Ler Mais</button>
        </div>
        <div id="card2">
            <div id="icon">
                <img src={svg2} alt="01"/>
            </div>
            <div id="content2">
                <h3>
                    Terei Que Pagar<br/>
                    Pelo Serviço?
                </h3>
                <p>O serviço só será pago caso a empresa de descarte cobre uma taxa.</p>
            </div>
            <button id="read_button2">Ler Mais</button>
        </div>
        <div id="card3">
            <div id="icon">
                <img src={svg3} alt="01"/>
            </div>
            <div id="content3">
                <h3>
                    Posso Fazer o Descarte<br/>
                    de qualquer tipo de eletrônico?
                </h3>
                <p>Somente poderão ser descartados os eletrônicos permitidos e especificados pela empresa de descarte selecionada.</p>
            </div>
            <button id="read_button3">Ler Mais</button>
        </div>
    </article>
    </>
  )
}

export default Cards
