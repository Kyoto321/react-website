import React from 'react'
import './blog.css'



function Blog() {
  return (
    <section class="blog">

        <div class="row">

            <div class="blog-col">
              <iframe height="315"
                  src="https://www.youtube.com/embed/W8nThq62Vb4?si=M4xQIghVMdt-V_gU" title="YouTube video" allowFullScreen>
              </iframe>

            </div>


            <div class="blog-col">
              <iframe height="315"
                  src="https://www.youtube.com/embed/cvbFexNnCqc?si=556mqhSrw6D2YKQr" title="YouTube video" allowFullScreen>
              </iframe>

            </div>

            <div class="blog-col">
              <iframe height="315"
                  src="https://www.youtube.com/embed/kQpYiY2t0Bs?si=j1SSRyBsibAO2dvJ" title="YouTube video" allowFullScreen>
              </iframe>

            </div>

        </div>

    </section>
  )
}

export default Blog

