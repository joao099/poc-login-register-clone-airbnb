import React from 'react';
import { Text } from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

/**
 * @param {children} props
 * @author JOÃO VITOR DA CRUZ.
 * @example
 * <ErrorMessage>Falhou!</ErrorMessage>
 * @description Return error message.
 * @version 0.0.1
 */
const ErrorMessage = props => {
  const { children } = props;

  return <Text style={Styles.txtErro}>{children}</Text>;
};

export default ErrorMessage;

/**
 * PROP-TYPES
 */
ErrorMessage.propTypes = {
  /**
   * @prop {Node} children - Error message text.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
