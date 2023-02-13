import React from 'react'
import { useQuery } from 'react-query'

import { ErrorDisplay } from 'components/Error/Error'
import LoadingIndicator from 'components/Loader/Loading'

import { ApiError } from 'types'

interface Props {
  queryKey: string[]
  fetcher: () => Promise<any>
}

export const useReusableQuery = ({ queryKey, fetcher }: Props) => {
  const { isLoading, error, data } = useQuery<any, ApiError>(queryKey, fetcher)

  if (isLoading) return <LoadingIndicator loading={isLoading} />

  if (error) return <ErrorDisplay errorMessage={error?.message} />

  return data
}
