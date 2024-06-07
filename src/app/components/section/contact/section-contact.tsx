'use client'
import { FaEnvelope } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPaperPlane } from 'react-icons/fa6'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { FaCircleQuestion } from 'react-icons/fa6'
import { FaRegCircleCheck } from 'react-icons/fa6'

import styles from './section-contact.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '@/app/validations/userSchema'

type Inputs = {
  name: string
  email: string
  message: string
}

export function SectionContact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(userSchema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('🟢', data)
  }

  return (
    <>
      <section className={styles.contact} id='contacto'>
        <h1 className='heading'>
          <span>Contácta</span>me
        </h1>

        <div className={styles.row}>
          <div className={styles.content}>
            <h3 className={styles.title}>Contacto</h3>

            <div className={styles.info}>
              <h3>
                <FaEnvelope /> ingmarcosortiz@gmail.com
              </h3>
              <h3>
                <FaSquareWhatsapp /> +57 317-576-2034
              </h3>
              <h3>
                <FaLocationDot /> Colombia - Valledupar Cesar.
              </h3>
              <div className={styles.question}>
                <div>
                  <FaCircleQuestion fontSize={20} />
                </div>
                <span className={styles.text}>
                  Si tienes una idea para una aplicación web o móvil, no dudes
                  en contactarme. Puedes enviarme un mensaje a través de este
                  formulario.
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.successMensage}>
              <div>
                <FaRegCircleCheck fontSize={18} />
              </div>
              <p>
                ¡Mensaje enviado con éxito! Gracias por contactarme. En breve
                recibirás una respuesta en tu correo electrónico.{' '}
              </p>
            </div>

            <input
              type='text'
              placeholder='Nombre'
              className={styles.box}
              {...register('name')}
            />
            {errors.name?.message && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
            <input
              type='text'
              placeholder='Correo'
              className={styles.box}
              {...register('email')}
            />
            {errors.email?.message && (
              <span className={styles.error}>{errors.email.message}</span>
            )}

            <textarea
              cols={30}
              rows={10}
              className={`${styles.box} ${styles.message}`}
              placeholder='Mensaje'
              {...register('message')}></textarea>
            {errors.message?.message && (
              <span className={styles.error}>{errors.message.message}</span>
            )}

            <button className='btn' type='submit'>
              Enviar <FaPaperPlane fontSize={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
