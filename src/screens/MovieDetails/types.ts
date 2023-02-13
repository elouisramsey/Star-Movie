export interface SharedProps {
  backdrop_path: string
  goBack: () => void
  changeView: (val: number) => void
  onScroll: any
  overview: string
  original_title: string
  runtime: number
  tabIndex: number
  genres: []
  adult: boolean
  children: React.ReactNode
  tabs: { name: string }[]
}
