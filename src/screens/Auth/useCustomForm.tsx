import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

const useCustomForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    console.log(data)
    // Submit form data to server or do other things here
    setIsSubmitting(false)
  }

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    Controller
  }
}

export default useCustomForm
