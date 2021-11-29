import React from 'react'
import {GlobalStyle, Wrapper} from './Codeoscopic.styles'
import Button from '../../atoms/Button'
import Card from '../../molecules/Card'

const Codeoscopic = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <section className="intro">
        <div className="wrap">
          <div className="title">
            <h1>Acceso de usuarios</h1>
          </div>
          <div className="explanation">
            <p>
              Accede a todas nuestras aplicaciones desde esta página de acceso.
            </p>
            <div className="credits">
              <img
                src="https://avant2.es/wp-content/uploads/2021/01/Logotipo.svg"
                alt="Acceder a Avant2 Sales Manager"
                loading="lazy"
                width="100"
                height="auto"
              />
               <img
                  src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_200/https://www.mediadoresdesegurosdemadrid.com/wp-content/uploads/2014/09/Logo-Te-sis.png"
                  alt="Acceder a Te-Sis"
                  loading="lazy"
                  width="100"
                  height="auto"
                />
                <img
                  src="https://versusdata.com/wp-content/themes/versus_2021/public/images/header/logo-versus.svg"
                  alt="Acceder a Versus"
                  loading="lazy"
                  width="100"
                  height="auto"
                />
              
            </div>
          </div>
         <Card></Card>
         
        </div>
      </section>

      <section className="schedule">
        <div className="wrap">
          
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <p>
            Copyright Codeoscopic © 2021
          </p>
        </div>
      </footer>
    </Wrapper>
  </>
)

export default Codeoscopic
