import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../pages/signIn/styles';

const InputName = props => {
  const { onChangeText, style, value } = props;

  return (
    <TextInput
      onChangeText={username => onChangeText(username)}
      style={style}
      placeholder="Digite seu usuário"
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default InputName;

/**
 * PROP-TYPES
 */
InputName.propTypes = {
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

InputName.defaultProps = {
  style: Styles.inputEmail,
};
