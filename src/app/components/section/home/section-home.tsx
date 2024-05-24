import Link from 'next/link'
import styles from './section-home.module.css'
import { FaUser } from 'react-icons/fa6'

interface Props {
  ref?: React.ForwardedRef<HTMLElement>
}

export function SectionHome({ ref }: Props) {
  return (
    <>
      <section className={styles.home} id='home'>
        <h3>Hola, que tal 👋🏻!</h3>
        <h1>
          {`Soy`} <span>Marcos Ortiz</span>
        </h1>
        {/* <p>
          Ingeniero de Sistemas con experiencia en el desarrollo de aplicaciones
          web y móviles. <br /> Me dedico a crear soluciones a medida que se
          adaptan a las necesidades específicas de cada cliente. Mi pasión por
          la programación y mi habilidad para trabajar con tecnologías modernas
          me permiten llevar tus ideas al siguiente nivel.
        </p> */}
        <p>
          Ingeniero de Sistemas con experiencia en el desarrollo de aplicaciones
          web y móviles. Me dedico a crear soluciones personalizadas que se
          ajustan a las necesidades específicas de cada cliente. Mi pasión por
          la programación y mi habilidad para trabajar con tecnologías modernas
          me permiten llevar tus ideas al siguiente nivel.
        </p>

        <Link href={'#about'}>
          <button className='btn'>
            Servicios <FaUser fontSize={16} />
          </button>
        </Link>
      </section>
    </>
  )
}
