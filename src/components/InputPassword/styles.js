import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/utils';

const Styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#fff',
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('90%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: widthPercentageToDP('1.5%'),
    marginBottom: heightPercentageToDP('3%'),
  },

  input: {
    marginLeft: 10,
  },
});

export default Styles;
