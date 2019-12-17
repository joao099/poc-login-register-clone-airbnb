import React from 'react';
import { Input } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

/**
 * @author JOÃO VITOR DA CRUZ.
 * @version 0.0.1
 * @example 
 *  <InputPassword
      style={style}
      placeholder="Digite sua senha"
      onChangeText={password => onChangeText(password)}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry
    />
  * @description Component responsible for inputting the password.
 */
const InputPassword = props => {
  const { style, onChangeText, value } = props;

  return (
    <Input
      inputContainerStyle={style.container}
      inputStyle={style.input}
      placeholder="Digite sua senha"
      onChangeText={password => onChangeText(password)}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry
      leftIcon={<Icon name="user-circle" size={20} color="#FC6663" />}
      rightIcon={<Icon name="exclamation-triangle" size={20} color="#ce2029" />}
    />
  );
};

export default InputPassword;

/**
 * PROP-TYPES
 */
InputPassword.propTypes = {
  /**
   * @prop {Object} style - Style of input.
   */
  style: PropTypes.object,
  /**
   * @prop {Func} onChangeText - Responsible for the text exchange of the input.
   */
  onChangeText: PropTypes.func.isRequired,
  /**
   * @prop {String} value - Input value.
   */
  value: PropTypes.string.isRequired,
};

InputPassword.defaultProps = {
  style: Styles,
};
