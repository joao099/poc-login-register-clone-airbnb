import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const SucessMessage = props => {
  const { children } = props;

  return <Text style={Styles.txtSucess}>{children}</Text>;
};

export default SucessMessage;

/**
 * PROP-TYPES
 */
SucessMessage.propTypes = {
  /**
   * @prop {Node} children - Success message text.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
