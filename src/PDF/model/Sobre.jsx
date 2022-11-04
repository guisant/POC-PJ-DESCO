import { View, Text } from '@react-pdf/renderer'
import styles from './styles'

export const Sobre = ({ address }) => {
  return (
    <View style={styles.section_right}>
      <Text>{address}</Text>
    </View>
  )
}

export default Sobre
