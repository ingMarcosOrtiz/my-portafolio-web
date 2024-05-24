import styles from './section-education.module.css'
import { FaGraduationCap } from 'react-icons/fa6'

interface Props {
  ref?: React.ForwardedRef<HTMLElement>
}

export function SectionEducation({ ref }: Props) {
  return (
    <>
      <section className={styles.education} id='education'>
        <h1 className='heading'>
          Mi <span>Educación</span>
        </h1>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <FaGraduationCap />
            <span>2019</span>
            <h3>Ingeniería de Sistemas</h3>
            <p>✔ Universidad Nacional Abierta y a Distancia - (UNAD)</p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2014</span>
            <h3>
              Tecnólogo en Análisis y Desarrollo de Sistemas de información
            </h3>
            <p>✔ Servicio Nacional de Aprendizaje - (SENA) </p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2013</span>
            <h3>Técnico en Sistemas</h3>
            <p>✔ (UPARSISTEM)</p>
          </div>
          <div className={styles.box}>
            <FaGraduationCap />
            <span>2023</span>
            <h3>Herramientas de Inteligencia Artificial para Devlopers</h3>
            <p>✔ (PLATZI)</p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2020</span>
            <h3>Frontend Developer</h3>
            <p>✔ (PLATZI)</p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2021</span>
            <h3>Frond end development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              qui quas, quisquam, ipsum sapiente tempore obcaecati veritatis
              quis cumque sit deserunt maxime modi. Veritatis expedita
              dignissimos, optio quae dicta earum?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
