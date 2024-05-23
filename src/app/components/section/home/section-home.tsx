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
        <h3>HI THERE !</h3>
        <h1>
          {`I'M`} <span>Marcos Ortiz</span>
        </h1>
        <p>
          Ingeniero de Sistemas especializado en el desarrollo Full Stack en
          JavasCript, con una sólida formación académica y experiencia
          certificada laboralmente. He demostrado mi capacidad para crear
          interfaces de usuario atractivas y eficientes, centrándome en
          implementar soluciones frontend robustas que mejoren tanto la
          experiencia del usuario como el rendimiento de una aplicación web,
          landing page ó plataformas de ecommerce.
        </p>
        <Link href={'#about'}>
          <button className='btn'>
            About Me <FaUser fontSize={16} />
          </button>
        </Link>
      </section>
    </>
  )
}
