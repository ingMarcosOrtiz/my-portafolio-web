'use server'
import { Inputs } from '@/app/components/section/contact/section-contact'
import axios from 'axios'
import { confApi } from '../config/apiAxios'

export async function sendInfo(data: Inputs) {
  try {
    const response = await confApi.post('/send-info', {
      name: data.name,
      email: data.email,
      message: data.message,
    })
    return response.data
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    throw new Error('Error al iniciar sesión.')
  }
}
