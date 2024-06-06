import { z } from 'zod'

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Por favor ingrese un nombre.' })
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
    .max(60, {
      message: 'El nombre debe tener menos de 200 caracteres.',
    }),
  email: z.string()
  .min(1, { message: 'Por favor ingrese un correo electrónico.' })
  .email({
    message: 'Por favor ingrese un correo electrónico válido',
  }),
  message: z.string()
  .min(1, { message: 'Por favor ingrese un mensaje.' })
  .min(10, {
    message: 'El mensaje es requerido y debe tener al menos 10 caracteres.',
  }),
})


export const SendEmailCVSchema = z.object({
  email: z.string()
  .min(1, { message: 'Por favor ingrese un correo electrónico.' })
  .email({
    message: 'Por favor ingrese un correo electrónico válido',
  })
})

