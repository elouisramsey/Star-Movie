import request from 'config/api/api'

export const key = '4c710f14ee6eeae3c9a0b1b449034c89'

export default class MovieService {
  //   static getSingleMovie() {
  //     return request({
  //       url: `trending/movie/week?api_key=${key}`,
  //       method: 'GET'
  //     })
  //   },
  static getAllMovies() {
    return request({
      url: `trending/movie/week?api_key=${key}`,
      method: 'GET'
    })
  }
}
