import { StyleSheet } from 'react-native';
import { wp, hp } from 'shared/config/dimensions';
import { shadowStyle } from 'shared/ui/styles/shadows/shadowStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(3),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(5),
  },
  logo: {
    width: wp(100),
    height: hp(40),
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: hp(-10),
    fontSize: hp(4.5),
    fontFamily: 'PlayfairDisplayBlack',
    textAlign: 'center',
    ...shadowStyle,
  },
  message: {
    textAlign: 'center',
    fontSize: hp(1.8),
    marginTop: hp(1),
    fontFamily: 'PlayfairDisplayBold',
    color: '#555',
    ...shadowStyle,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: hp(1),
    paddingVertical: hp(2),
    width: '80%',
    alignSelf: 'center',
    ...shadowStyle,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: hp(1.8),
    fontFamily: 'InterSemiBold',
  },
});
