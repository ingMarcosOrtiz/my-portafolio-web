import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaPaperPlane,
} from 'react-icons/fa6'
import styles from './section-contact.module.css'

interface Props {
  ref?: React.ForwardedRef<HTMLElement>
}

export function SectionContact({ ref }: Props) {
  return (
    <>
      <section className={styles.contact} id='contacto'>
        <h1 className='heading'>
          <span>Contácta</span>me
        </h1>

        <div className={styles.row}>
          <div className={styles.content}>
            <h3 className={styles.title}>Contact Info</h3>

            <div className={styles.info}>
              <h3>
                <FaEnvelope /> ingmarcosortiz@gmail.com
              </h3>
              <h3>
                <FaPhone /> +57 317-576-2034
              </h3>
              <h3>
                <FaLocationDot /> Colombia - Valledupar Cesar
              </h3>
            </div>
          </div>
          <form action=''>
            <input type='text' placeholder='Nombre' className={styles.box} />
            <input type='email' placeholder='Correo' className={styles.box} />

            <textarea
              name=''
              id=''
              cols={30}
              rows={10}
              className={`${styles.box} ${styles.message}`}
              placeholder='Mensaje'></textarea>

            <button className='btn' type='submit'>
              Enviar <FaPaperPlane fontSize={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
