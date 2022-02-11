import { IMovie } from '../store/movies/movies-slice'

export const pruneMoviesData = (movies): IMovie[] =>
  movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    genreIds: movie.genre_ids
  }))
