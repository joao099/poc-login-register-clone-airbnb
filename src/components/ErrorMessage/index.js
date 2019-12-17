import React from 'react';
import { Text } from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';
import { heightPercentageToDP } from '../../utils/utils';

/**
 * @author JOÃO VITOR DA CRUZ.
 * @example
 * <ErrorMessage>Falhou!</ErrorMessage>
 * @description Return error message.
 * @version 0.0.1
 */
const ErrorMessage = props => {
  const { children, style, pageDad } = props;

  return (
    <Text
      style={
        pageDad === 'Login'
          ? style
          : { ...style, marginBottom: heightPercentageToDP('1%') }
      }
    >
      {children}
    </Text>
  );
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
  /**
   * @prop {Object} style - Style the text.
   */
  style: PropTypes.object.isRequired,
  /**
   * @prop {String} pageDad - Page responsible for calling the component.
   */
  pageDad: PropTypes.string,
};

ErrorMessage.defaultProps = {
  style: Styles.txtErro,
  pageDad: '',
};
