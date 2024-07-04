import axios from 'axios'

const BASE_URL = 'https://cdn-dev.preoday.com/challenge'

export const api = axios.create({
  baseURL: BASE_URL
})
