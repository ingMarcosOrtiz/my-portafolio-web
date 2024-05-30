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
            <span>2024</span>
            <h3>Curso: Nest Desarrollo backend escalable con Node</h3>

            <p>
              REST, TypeScript, Websockets, Autenticación, Authorización,
              Docker, Mongo, Postgres, TypeOrm. Nest es un framework de node
              extensible, versátil y progresivo, el cual nos ofrece la columna
              vertebral de todo tipo de aplicaciones del lado del servidor.
            </p>
          </div>
          <div className={styles.box}>
            <FaGraduationCap />
            <span>2024</span>
            <h3>Curso: Domina TailwindCSS - Desde cero a experto </h3>
            <p>✔ UDEMY</p>
          </div>

          <div className={styles.box}>
            <FaGraduationCap />
            <span>2023</span>
            <h3>
              Curso: Herramientas de Inteligencia Artificial para Devlopers
            </h3>
            <p>✔ (PLATZI)</p>
          </div>

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
        </div>
      </section>
    </>
  )
}
