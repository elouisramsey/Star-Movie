import { Feather, FontAwesome5 } from '@expo/vector-icons'
import { COLORS } from 'config/COLORS'
import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { statusStyles } from './style'

// import { reset } from 'store/Features/Cinema/cinemaSlice'
// import { useAppDispatch, useAppSelector } from 'store/Hooks/hooks'

type IconProps = {
  iconName: keyof typeof Feather.glyphMap
}

type Props = {
  navigation: any
  showModal: boolean
  contentWrapperStyle?: object
  status: 'error' | 'success' | ''
  setShowModal: (val: boolean) => void
  subText: string
}

const Status = ({
  showModal,
  contentWrapperStyle,
  navigation,
  status,
  setShowModal,
  subText
}: Props) => {
  //   const dispatch = useAppDispatch()
  //   const selectedInfo = useAppSelector((state) => state.cinema)
  //   const { date, time, theatre, movieName, resolution, selectedSeat } =
  // selectedInfo
  return (
    <>
      <Modal transparent={true} animationType={'none'} visible={showModal}>
        <View style={statusStyles.modalBackground}>
          <View style={[statusStyles.contentWrapper, contentWrapperStyle]}>
            <View style={statusStyles.card}>
              <View style={statusStyles.imageHolder}>
                <View style={statusStyles.mark}>
                  {status === 'success' ? (
                    <FontAwesome5 name='check' size={24} color='#4CD964' />
                  ) : (
                    <FontAwesome5 name='ban' size={24} color={COLORS.primary} />
                  )}
                </View>
              </View>
              <Text style={statusStyles.title}>
                {status === 'success' ? 'Congratulations!' : 'Error'}
              </Text>
              <Text style={statusStyles.subText}>{subText}</Text>

              <View
                style={{ overflow: 'hidden', width: '100%', marginBottom: 25 }}
              >
                <View style={statusStyles.borderHack} />
              </View>
              {/* <View style={statusStyles.rows}>
                <View>
                  <View>
                    <Text style={statusStyles.header}>Theatre</Text>
                    <Text style={statusStyles.text}>{theatre}</Text>
                  </View>
                  <View>
                    <Text style={statusStyles.header}>Date</Text>
                    <Text style={statusStyles.text}>{date}</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={statusStyles.header}>Seat</Text>
                    <Text style={statusStyles.text}>{selectedSeat}</Text>
                  </View>
                  <View>
                    <Text style={statusStyles.header}>Time</Text>
                    <Text style={statusStyles.text}>{time}</Text>
                  </View>
                </View>
              </View> */}
            </View>
            <TouchableOpacity
              style={statusStyles.cancel}
              onPress={() => {
                setShowModal(false)
                //   navigation.navigate('Home')
                // dispatch(reset())
                // dispatch(resetTicket())
              }}
            >
              <Feather name='x' size={24} color='rgba(255, 255, 255, 0.8)' />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default Status
