import { TouchableOpacity, View } from 'react-native'
import { seatStyles } from './styles'
import { Seat } from './types'

export const SingleSeat: React.FC<Seat> = ({
  available,
  onPress,
  vip,
  booked,
  id,
  selected,
  opacity
}) => {
  return (
    <TouchableOpacity
      disabled={booked}
      onPress={onPress}
      style={{
        width: '33%'
      }}
    >
      <View
        style={[
          seatStyles.seat,
          {
            backgroundColor:
              !booked && !available && selected
                ? '#47CFFF'
                : booked
                ? '#323D4C'
                : 'transparent',

            borderColor: vip ? '#47CFFF' : '#475363',
            opacity
          }
        ]}
      />
    </TouchableOpacity>
  )
}
