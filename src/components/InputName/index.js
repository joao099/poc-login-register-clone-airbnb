import React from 'react';
import { Input } from 'react-native-elements';
import PropTypes from 'prop-types';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * @author JOÃO VITOR DA CRUZ.
 * @name InputName
 * @example
 * <InputName {...props}/>
 * @version 0.0.1
 * @description Password Input.
 */
const InputName = props => {
  const { onChangeText, style, value } = props;

  return (
    <Input
      onChangeText={username => onChangeText(username)}
      inputContainerStyle={style.container}
      inputStyle={style.input}
      placeholder="Digite seu usuário"
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      leftIcon={<Icon name="user-circle" size={20} color="#FC6663" />}
      rightIcon={<Icon name="exclamation-triangle" size={20} color="#ce2029" />}
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
  style: Styles,
};
