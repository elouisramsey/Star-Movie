import MoreInfo from 'components/MoreInfo/MoreInfo'
import { useReusableQuery } from 'config/api/useReusableQuery'
import React from 'react'
import MovieService from 'screens/Home/services'
import SingleCrew from './SingleCrew'

type Props = {
  id: number
}

const Crew = ({ id }: Props) => {
  const crew = useReusableQuery({
    fetcher: () => MovieService.getMovieCrew(id),
    queryKey: ['single-crew']
  })

  return (
    <>
      <MoreInfo onPress={() => {}}>Cast & Crew</MoreInfo>
      {crew?.cast?.slice(0, 4).map((item: any) => (
        <SingleCrew key={item.id} {...item} />
      ))}
    </>
  )
}

export default Crew
