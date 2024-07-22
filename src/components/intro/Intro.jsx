import "./intro.css"

import image1 from '../../assets/image1.jpg' 

const Intro = () => {
  return (
      <section class="intro">
        <div class="row">
            <div class="intro-col">
              <img src={image1} alt='image1' />
            </div>
        </div>
      </section>
  )
}

export default Intro