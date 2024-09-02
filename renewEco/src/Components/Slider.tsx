import '../style.css'
import img1 from '../assets/01.png'
import img2 from '../assets/02.png'

function Slider() {

  return (
    <>
    <article id="slider">
        <div id="conteudo">
            <div id="slides">
                <input type="radio" name="slide" id="slide1" checked/>
                <input type="radio" name="slide" id="slide2"/>

                <div id="slide s1">                    
                    <img src={img1} alt="Propaganda 1"/>
                </div>
                <div id="slide">                    
                    <img src={img2} alt="Propaganda 2"/>
                </div>
            </div>
            <div id="navigation">
                <label id="bar" htmlFor="slide1"/>
                <label id="bar" htmlFor="slide2"/>
            </div>
        </div>
    </article>
    </>
  )
}

export default Slider
