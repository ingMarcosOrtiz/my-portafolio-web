'use server'
import { Inputs } from '@/app/components/section/contact/section-contact'
import axios from 'axios'

export async function sendInfo(data: Inputs) {
  try {
    return { data }
    const response = await axios.post(
      'http://localhost:3000/api/v1/auth/login',
      {
        name: data.name,
        email: data.email,
        message: data.message,
      }
    )
    return response.data // Devuelve los datos de usuario obtenidos del servidor
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    throw new Error('Error al iniciar sesión.')
  }
}
