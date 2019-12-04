import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/utils';

const Styles = StyleSheet.create({
  txtErro: {
    marginBottom: heightPercentageToDP('3%'),
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ce2029',
    paddingHorizontal: widthPercentageToDP('1%'),
    textAlign: 'center',
  },
});

export default Styles;
