// import { API_TOKEN, MOVIE_API_KEY, MOVIE_BASE_URL } from '@env'
import axios from 'axios'

export const api = (() => {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
  })
})()

export const key = '4c710f14ee6eeae3c9a0b1b449034c89'

api.defaults.headers.common[
  'Authorization'
] = `Bearer ${'eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0YzcxMGYxNGVlNmVlYWUzYzlhMGIxYjQ0OTAzNGM4OSIsInN1YiI6IjYyMThhNjA2N2RmZGE2MDA2OTJkZGQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.'}`

const request = async function (options: any, store?: any) {
  const onSucess = function (response: any) {
    const { data } = response
    return data
  }
  const onError = function (error: { response: any }) {
    return Promise.reject(error.response)
  }

  return api(options).then(onSucess).catch(onError)
}

export default request
