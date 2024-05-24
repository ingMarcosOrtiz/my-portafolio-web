import Image from 'next/image'
import styles from './section-about.module.css'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa6'

export function SectionAbout() {
  return (
    <>
      <section className={styles.about} id='about'>
        <h1 className='heading'>
          <span>Acerca de</span> mi{' '}
        </h1>

        <div className={styles.row}>
          <div className={styles.info}>
            <h3>
              <span>Nombre: </span>Marcos Ortiz
            </h3>
            <h3>
              <span>Profesión: </span>Ingeniero de Sistemas.
            </h3>

            <h3>
              <span>Experiencia: </span>4 años de experiencia.
            </h3>

            <h3>
              <span>Stack: </span> Full Stack en JavaScript.
            </h3>
            <h3>
              <span>Tecnologías: </span> React, NextJs, React Nactive, NodeJs,
              NestJs, PostgreSQL, Mysql, Figma.
            </h3>
            <h3>
              <span>Cloud computing: </span>Railway, Digitalocean Spaces,
              Namecheap.
            </h3>
            <h3>
              <span>Servicios: </span> Freelance - Aplicaciones Web y Móvil.
            </h3>
            <h3>
              <span>País: </span> Colombia
            </h3>

            <Link href={'/#'}>
              <button className='btn'>
                Dowload CV
                <FaDownload fontSize={16} />
              </button>{' '}
            </Link>
          </div>
          <div className={styles.counter}>
            <div className={styles.box}>
              <span> 4+</span>
              <h3>Años de Experiencia.</h3>
            </div>

            <div className={styles.box}>
              <span> 12+</span>
              <h3>Proyectos completados.</h3>
            </div>

            <div className={styles.box}>
              <span> 6+</span>
              <h3>Clientes Felices.</h3>
            </div>

            <div className={styles.box}>
              <span> 10+</span>
              <h3>Tecnologías</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
