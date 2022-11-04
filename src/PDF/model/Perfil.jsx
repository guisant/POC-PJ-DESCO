import { View, Text } from '@react-pdf/renderer'
import styles from './styles'

export const Profile = ({ profile }) => {
  return (
    <View style={styles.profile_container}>
      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <Text style={styles.name_text}>{profile.name}</Text>
      </View>
      <Text style={styles.profession_text}>{profile.profession}</Text>
      <View style={styles.profile_line} />
    </View>
  )
}

const Perfil = ({ profile }) => {
  return (
    <View style={styles.section_left}>
      <Profile profile={profile} />
    </View>
  )
}

export default Perfil
