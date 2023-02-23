import Button from 'components/Button/Button'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import Input from 'components/TextInput/TextInput'
import {
  convertCurrency,
  memoizedGetTotalPrice,
  totalPriceOfSelectedExtras
} from 'config/functions'
import { useGeneralSeatState } from 'context/MovieContext'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { seatStyles } from 'screens/Tickets/Seats/styles'
import { paymentStyles } from './styles'

const PaymentFormFields = ({
  createAndAssignTicket,
  loading
}: {
  createAndAssignTicket: () => void
  loading: boolean
}) => {
  const { state } = useGeneralSeatState()
  const TotalPriceofExtras = totalPriceOfSelectedExtras(state.extras)
  const totalPrice = memoizedGetTotalPrice(state.seats)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  })

  const onSubmit = async () => {
    createAndAssignTicket()
  }

  return (
    <View
      style={{
        height: '90%'
      }}
    >
      <View style={seatStyles.main}>
        <Controller
          control={control}
          defaultValue=''
          name='cardName'
          rules={{
            required: {
              value: true,
              message: 'Name on card is required'
            },
            minLength: {
              value: 2,
              message: 'Name on card is not valid'
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label='Name on Card'
              errorText={errors.cardName?.message}
              error={Boolean(errors?.cardName)}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=''
          name='cardNumber'
          rules={{
            required: {
              value: true,
              message: 'Card Number is required'
            },
            minLength: {
              value: 16,
              message: 'Card Number is not valid'
            },
            maxLength: {
              value: 16,
              message: 'Card Number should not be more than 16 digits'
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label='Card Number'
              errorText={errors.cardNumber?.message}
              error={Boolean(errors?.cardNumber)}
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
        />
        <View style={paymentStyles.cardExpiration}>
          <View style={{ width: '50%' }}>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: 'Card Expiration date is required'
                },
                minLength: {
                  value: 4,
                  message: 'Card Expiration date is not valid'
                },
                maxLength: {
                  value: 4,
                  message: 'Card Expiration date is not valid'
                }
              }}
              defaultValue=''
              name='cardExpiration'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  error={Boolean(errors?.cardExpiration)}
                  errorText={errors?.cardExpiration?.message}
                  onChangeText={onChange}
                  value={value}
                  label='Date Expires'
                  keyboardType='numeric'
                  placeholder='12/25'
                />
              )}
            />
          </View>
          <View style={{ width: '40%' }}>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: 'Card CVV is required'
                },
                minLength: {
                  value: 3,
                  message: 'Card CVV is not valid'
                },
                maxLength: {
                  value: 3,
                  message: 'Card CVV should be 3 digits'
                }
              }}
              defaultValue=''
              name='cardCvv'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  error={Boolean(errors?.cardCvv)}
                  errorText={errors?.cardCvv?.message}
                  onChangeText={(text) => onChange(+text)}
                  value={value}
                  label='CVV'
                  keyboardType='numeric'
                />
              )}
            />
          </View>
        </View>
      </View>
      <View style={seatStyles.bottom}>
        <View>
          <TextDisplay styles={seatStyles.cost}>Total Cost</TextDisplay>
          <TextDisplay styles={seatStyles.amount}>
            {convertCurrency(TotalPriceofExtras + totalPrice)}
          </TextDisplay>
        </View>
        <View style={{ width: '45%' }}>
          <Button
            title='Make Payment'
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
            loading={loading}
          />
        </View>
      </View>
    </View>
  )
}

export default PaymentFormFields
