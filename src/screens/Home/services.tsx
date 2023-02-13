import request from 'config/api/api'

export const key = '4c710f14ee6eeae3c9a0b1b449034c89'

export default class MovieService {
  static getSingleMovie(id: number) {
    return request({
      url: `movie/${id}?api_key=${key}&language=en-US`,
      method: 'GET'
    })
  }
  static getAllMovies() {
    return request({
      url: `trending/movie/week?api_key=${key}`,
      method: 'GET'
    })
  }
  static getMovieCrew(id: number) {
    return request({
      url: `movie/${id}/credits?api_key=${key}&language=en-US`,
      method: 'GET'
    })
  }
  static getMovieImages(id: number) {
    return request({
      url: `movie/${id}/images?api_key=${key}`
    })
  }
  static getMovieVideos(id: number) {
    return request({
      url: `movie/${id}/videos?api_key=${key}`
    })
  }
  static getMovieReviews(id: number) {
    return request({
      url: `movie/${id}/reviews?api_key=${key}`
    })
  }
}

//  https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
