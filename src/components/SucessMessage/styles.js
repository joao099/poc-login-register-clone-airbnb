import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/utils';

const Styles = StyleSheet.create({
  txtSucess: {
    textAlign: 'center',
    color: '#08a092',
    fontSize: 16,
    marginHorizontal: widthPercentageToDP('2%'),
    marginTop: heightPercentageToDP('5%'),
  },
});

export default Styles;
