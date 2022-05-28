import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import usa from './assets/images/usa.png';
import { spacing } from './src/theme/assets';
import { colors } from './src/theme/colors';
import Text from './src/theme/text';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHead}>
        {/* icons */}
        <View style={styles.icon}>
          <Ionicons
            style={{ color: colors.white }}
            name="md-menu-outline"
            size={30}
            color="black"
          />
          <Ionicons
            style={{ color: colors.white }}
            name="notifications-sharp"
            size={24}
            color="black"
          />
        </View>
        {/* covid-19 */}
        <View style={styles.covid}>
          <Text preset="h5" style={{ color: colors.white }}>
            Covid-19
          </Text>
          <Pressable style={styles.dropdown}>
            <Image
              style={{ marginRight: spacing[2], width: 16, height: 16 }}
              source={usa}
            />
            <Text style={{ marginRight: spacing[2] }}>usa</Text>
            <AntDesign name="caretdown" size={16} color="black" />
          </Pressable>
        </View>
        {/* sick */}
        <View style={{ marginHorizontal: spacing[1] }}>
          <Text preset="h5" style={{ color: colors.white }}>
            Are You Feeling sick?
          </Text>
          <Text
            style={{ color: colors.white, fontSize: 15, marginTop: spacing[2] }}
          >
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
        </View>
        {/* buttons */}
        <View style={styles.btnContain}>
          <Pressable style={styles.button}>
            <Ionicons
              style={{ color: colors.white }}
              name="call"
              size={24}
              color="black"
            />
            <Text style={{ color: colors.white, marginLeft: spacing[3] }}>
              Call Now
            </Text>
          </Pressable>
          <Pressable style={styles.button1}>
            <Feather
              style={{ color: colors.white }}
              name="message-circle"
              size={24}
              color="black"
            />
            <Text style={{ color: colors.white, marginLeft: spacing[3] }}>
              Send SMS
            </Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHead: {
    height: '43%',
    paddingHorizontal: spacing[2],
    paddingTop: spacing[10],
    backgroundColor: colors.primary,
    borderBottomRightRadius: spacing[10],
    borderBottomLeftRadius: spacing[10],
  },
  icon: {
    display: 'flex',
    marginHorizontal: spacing[5],
    marginTop: spacing[3],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: spacing[5],
    alignItems: 'center',
  },
  covid: {
    flexDirection: 'row',
    marginHorizontal: spacing[2],
    marginVertical: spacing[10],
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnContain: {
    flexDirection: 'row',
    marginHorizontal: spacing[2],
    marginTop: spacing[3],
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: colors.secondary,
    borderRadius: spacing[5],
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: colors.blue,
    borderRadius: spacing[5],
  },
});
