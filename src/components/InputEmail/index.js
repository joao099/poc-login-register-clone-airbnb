import React from 'react';
import { Input } from 'react-native-elements';
import PropTypes from 'prop-types';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP } from '../../utils/utils';

/**
 * @author JOÃO VITOR DA CRUZ.
 * @version 0.0.1
 * @example
 * <InputEmail
 *  onChangeText={value}
 *  value={value}
 *  style={value}
 * />
 * @description - Component responsible for controlling email input.
 */
const InputEmail = props => {
  const { onChangeText, value, style, dad, showErrorIcon } = props;

  return (
    <Input
      onChangeText={email => onChangeText(email)}
      inputContainerStyle={
        dad === 'Login'
          ? style.container
          : { ...style.container, marginTop: heightPercentageToDP('1%') }
      }
      inputStyle={style.input}
      placeholder="Digite seu e-mail"
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      leftIcon={<Icon name="envelope" size={20} color="#FC6663" />}
      rightIcon={
        showErrorIcon && (
          <Icon name="exclamation-triangle" size={20} color="#ce2029" />
        )
      }
    />
  );
};

export default InputEmail;

/**
 * PROP-TYPES
 */
InputEmail.propTypes = {
  /**
   * @prop {Func} onChangeText - Method responsible for controlling text exchange.
   */
  onChangeText: PropTypes.func.isRequired,
  /**
   * @prop {String} value - Text input value.
   */
  value: PropTypes.string.isRequired,
  /**
   * @prop {Object} style - Style of the input text.
   */
  style: PropTypes.object,
  /**
   * @prop {String} dad - Parent responsible for component call.
   */
  dad: PropTypes.string,
  /**
   * @prop {Boolean} showErrorIcon - Responsible for controlling whether or not the error icon should appear.
   */
  showErrorIcon: PropTypes.bool,
};

InputEmail.defaultProps = {
  style: Styles,
  dad: '',
  showErrorIcon: false,
};
