import axios from 'axios'

const customFetch = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
})

export default customFetch
