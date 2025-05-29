import { Movie, CompleteMovie } from '../interfaces/movie.interface';
import { Result } from '../interfaces/moviedb-response';
import { MovieDBMovieResponse } from '../interfaces/moviedb-movie-response';

export class MovieMapper {
  static fromTheMovieDBToMovie = ( movie: Result ): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${ movie.poster_path }`,
      backdrop: `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`,
    }
  }

  static fromTheMovieDBToCompleteMovie = ( movie: MovieDBMovieResponse  ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${ movie.poster_path }`,
      backdrop: `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`,
      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map( g => g.name ),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map( c => c.name )
    }
  }
}
