// const BASE_URL = `${window.location.origin}/`
const API_KEY = 'e21522307a493e2a621bd5fd409fca23'

export const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
export const GENRE_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`
