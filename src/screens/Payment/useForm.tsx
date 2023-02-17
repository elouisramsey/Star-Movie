import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export const schema = yup
  .object()
  .shape({
    cardName: yup.string().required(),
    cardNumber: yup
      .number()
      .positive()
      .integer()
      .required()
      .min(16, 'Must be exactly 16 digits')
      .max(16, 'Must be exactly 16 digits'),
    cardExpiration: yup.number().positive().integer().required(),
    cardCvv: yup
      .number()
      .positive()
      .integer()
      .required()
      .min(3, 'Must be exactly 3 digits')
      .max(3, 'Must be exactly 3 digits')
  })
  .required()

type FormData = yup.InferType<typeof schema>

const useFormData = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onSubmit'
  })

  const onSubmit = (data: FormData) => console.log(data)

  return {
    onSubmit,
    control,
    handleSubmit,
    errors
  }
}

export default useFormData
