import styles from './content-modal-portafolio.module.css'
import Image from 'next/image'
export function ContentModalPortafolio() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgPortafolio}>
          {/* <p>Imagen Portafolio</p> */}
          <Image
            src='/img/Imagen1.png'
            alt='foto portafolio'
            // className={styles.picture}
            width={400}
            height={400}
            priority
          />
        </div>
        <div className={styles.descriptionPortafolio}>
          <div className={styles.portafoliocContent}>
            <div>
              <h1>Desarrollo Frontend</h1>
              <h2>Aplicación web - CanaryClean</h2>
            </div>
            <div>
              <p>
                El desarrollo web es un proceso complejo que implica la creación
                de productos digitales en línea. También es un término que
                define la creación de sitios web para Internet o una intranet.
                Para conseguirlo se hace uso de tecnologías de software del lado
                del servidor y del cliente que involucran una combinación de
                procesos de base de datos con el uso de un navegador web a fin
                de realizar determinadas tareas o mostrar información.1​
              </p>
            </div>
            <a
              target='_blank'
              className={styles.link}
              href='https://canaryclean.com/'>
              https://canaryclean.com/
            </a>
            <h2 className={styles.subtitle}>Tecnologias que usé :</h2>
            <div className={styles.wrapperTecnology}>
              <div className={styles.wrapperItem}>
                <ul>
                  <li>Laravel</li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>React</li>
                  <li>CSS</li>
                  <li>Mysql</li>
                </ul>
              </div>
              {/* <div className={styles.wrapperItem}>
                <ul>
                  <li>React</li>
                  <li>CSS</li>
                  <li>Mysql</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
