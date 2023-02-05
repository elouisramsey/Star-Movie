export interface IBMovie {
  title: string
  poster_path: string
  id: number
  media_type: string
  adult: boolean
  vote_average: number
  genre_ids: [string]
  original_title: string
  overview: string
}
