import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/utils';

const Styles = StyleSheet.create({
  txtSucess: {
    textAlign: 'center',
    color: '#08a092',
    fontSize: 16,
    marginBottom: heightPercentageToDP('2%'),
    marginHorizontal: widthPercentageToDP('2%'),
  },
});

export default Styles;
