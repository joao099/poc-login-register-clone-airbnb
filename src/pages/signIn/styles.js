import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputEmail: {
    borderRadius: 5,
    backgroundColor: '#fff',
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('90%'),
    textAlign: 'center',
    marginTop: heightPercentageToDP('5%'),
  },

  inputPassword: {
    borderRadius: 5,
    backgroundColor: '#fff',
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('90%'),
    textAlign: 'center',
    marginTop: heightPercentageToDP('1%'),
    marginBottom: heightPercentageToDP('3%'),
  },
});

export default Styles;
