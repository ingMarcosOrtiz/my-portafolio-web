import axios from 'axios'

const confApi = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// TODO: Interceptor

export { confApi }
