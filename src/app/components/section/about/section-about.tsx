import Image from 'next/image'
import styles from './section-about.module.css'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa6'

export function SectionAbout() {
  return (
    <>
      <section className={styles.about} id='about'>
        <h1 className='heading'>
          <span>About</span> me{' '}
        </h1>

        <div className={styles.row}>
          <div className={styles.info}>
            <h3>
              <span>Name:</span>Marcos Ortiz
            </h3>
            <h3>
              <span>Ubicacion:</span>Valledupar - Cesar - Colombia
            </h3>
            <h3>
              <span>Nacionalidad:</span>Colombia
            </h3>
            <h3>
              <span>Lenguaje:</span>Español nativo
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
              <h3>Years of experience</h3>
            </div>

            <div className={styles.box}>
              <span> 100+</span>
              <h3>Project completed</h3>
            </div>

            <div className={styles.box}>
              <span> 430+</span>
              <h3>Happy Clients</h3>
            </div>

            <div className={styles.box}>
              <span> 200+</span>
              <h3>Junmantyu</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
