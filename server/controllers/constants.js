// const BASE_URL = `${window.location.origin}/`
const API_KEY = 'e21522307a493e2a621bd5fd409fca23'

exports.GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
exports.GENRE_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=`
exports.IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185/'