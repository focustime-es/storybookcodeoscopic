import React from 'react'
import {GlobalStyle, Wrapper} from './Codeoscopic.styles'
import Button from '../../atoms/Button'

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
                  src="http://51.75.250.100:81/v2/logo/logoOscuro.png?s=51.75.250.100"
                  alt="uiFromMars"
                  loading="lazy"
                  width="100"
                  height="auto"
                />
                <img
                  src="https://versusdata.com/wp-content/themes/versus_2021/public/images/header/logo-versus.svg"
                  alt="Holaluz"
                  loading="lazy"
                  width="100"
                  height="auto"
                />
              
            </div>
          </div>
          <div className="explanation">
              <input type="text" placeholder="usuario" />
              <input type="text" placeholder="contraseña" />
              <Button>Default button</Button>
          </div>
         
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
