import React from 'react';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

/**
 * @author JOÃO VITOR DA CRUZ.
 * @example
 * <EnterButton
 *  onPress={() => {}}
 *  isLoading={this.state.isLoading}
 * />
 * @description - Button responsible for logging in to the app.
 * @version 0.0.1
 */
const EnterButton = props => {
  const { onPress, isLoading, title } = props;

  return (
    <TouchableOpacity onPress={onPress} style={Styles.button}>
      {isLoading && <ActivityIndicator color="#fff" size="large" />}
      {!isLoading && <Text style={Styles.txtButton}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default EnterButton;

/**
 * PROP-TYPES
 */
EnterButton.propTypes = {
  /**
   * @prop {Func} onPress - Method responsible for triggering the button click.
   */
  onPress: PropTypes.func.isRequired,
  /**
   * @prop {Boolean} isLoading - Responsible for loading when there are requests to someone service.
   */
  isLoading: PropTypes.bool,
  /**
   * @prop {String} title - Title button.
   */
  title: PropTypes.string.isRequired,
};

EnterButton.defaultProps = {
  isLoading: false,
};
