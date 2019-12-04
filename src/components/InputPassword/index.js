import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 
 * @param {style, onChangeText, value} props
 * @author JOÃO VITOR DA CRUZ.
 * @version 0.0.1
 * @example 
 *  <TextInput
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
    <TextInput
      style={style}
      placeholder="Digite sua senha"
      onChangeText={password => onChangeText(password)}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry
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
  style: {},
};
