import axios from 'axios'

const API_URL = import.meta.env.VITE_RAWG_API_GAME_URL
const API_KEY = import.meta.env.VITE_RAWG_API_KEY

export const api = axios.create({
  baseURL: `${API_URL}?key=${API_KEY}&page_size=10&search_precise=true`,
})
