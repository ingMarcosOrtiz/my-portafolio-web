'use client'
import { FaEnvelope } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPaperPlane } from 'react-icons/fa6'

import styles from './section-contact.module.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '@/app/validations/userSchema'

export function SectionContact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) })

  console.log(errors)

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
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data)
            })}>
            <input
              type='text'
              placeholder='Nombre'
              className={styles.box}
              {...register('name')}
            />
            <input
              type='text'
              placeholder='Correo'
              className={styles.box}
              {...register('email')}
            />

            <textarea
              cols={30}
              rows={10}
              className={`${styles.box} ${styles.message}`}
              placeholder='Mensaje'
              {...register('message')}></textarea>

            <button className='btn' type='submit'>
              Enviar <FaPaperPlane fontSize={16} />
            </button>
            <div style={{ color: 'white' }}>
              {JSON.stringify(watch(), null, 2)}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
