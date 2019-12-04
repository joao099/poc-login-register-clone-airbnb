import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

/**
 * @param {onChangeText, value, style} props
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
  const { onChangeText, value, style } = props;

  return (
    <TextInput
      onChangeText={email => onChangeText(email)}
      style={style}
      placeholder="Digite seu e-mail"
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
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
};

InputEmail.defaultProps = {
  style: {},
};
