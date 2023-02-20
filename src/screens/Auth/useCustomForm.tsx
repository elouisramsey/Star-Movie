import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import useCreateUser, { confirmUser } from './hooks/useCreateUser'

const useCustomForm = ({
  navigateTo,
  setConfirmSignup
}: {
  setConfirmSignup: (val: boolean) => void
  navigateTo?: any
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const createUser = useCreateUser({ setConfirmSignup })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data: any) => {
    createUser.mutate(data)
  }

  const completeSignup = async ({
    username,
    authCode
  }: {
    username: string
    authCode: string
    navigateTo: any
  }) => {
    confirmUser({
      username,
      authCode,
      navigateTo
    })
  }

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    Controller,
    completeSignup
  }
}

export default useCustomForm
