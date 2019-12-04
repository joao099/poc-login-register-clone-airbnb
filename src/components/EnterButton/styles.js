import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/utils';

const Styles = StyleSheet.create({
  button: {
    height: heightPercentageToDP('7%'),
    width: widthPercentageToDP('90%'),
    backgroundColor: '#FC6663',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('5%'),
  },

  txtButton: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Styles;
