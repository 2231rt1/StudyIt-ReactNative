import { StyleSheet } from 'react-native';
import { wp, hp } from 'shared/config/dimensions';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    padding: hp(1),
    shadowColor: '#A500FF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    width: wp(80),
    textAlign: 'center',
    paddingVertical: hp(1),
    fontSize: hp(2),
    color: '#ffffff',
    textShadowColor: '#333',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontFamily: 'InterSemiBold',
  },
});
