'use client'
import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SendEmailCVSchema } from '@/app/validations/userSchema'

import { FaCircleInfo } from "react-icons/fa6";

import styles  from './form-send-cv.module.css'


type Inputs = {
  email: string
}
export  function FormSendCv() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>({ resolver: zodResolver(SendEmailCVSchema) })

      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('🟢',data)
      }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className= {styles.icon}>
              <FaCircleInfo />
              </div>
              <p className= {styles.text}>
                Ingresa tu correo electrónico para recibir mi CV directamente en tu bandeja de entrada ó ponte en contacto conmigo.</p>
              <div className={styles.inputBox}>
              <label htmlFor="email">Correo</label>
              <input 
              className={styles.input} 
              type="text" 
              id="email" 
              {...register('email')}
              />
              { errors.email?.message && <span className={styles.error}>{errors.email.message}</span>}
              </div>

              <button type='submit'>Enviar</button>
            </form>
           
    </>
  )
}
