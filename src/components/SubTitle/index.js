import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

/**
 * @author JOÃO VITOR DA CRUZ.
 * @example
 * <SubTitle
 *  onPress={() => {}}
 *  title="Clique aqui"
 * />
 * @description - Create account button.
 * @version 0.0.1
 */
const SubTitle = props => {
  const { onPress, title } = props;

  return (
    <Text onPress={onPress} style={Styles.txtInscreva}>
      {title}
    </Text>
  );
};

export default SubTitle;

/**
 * PROP-TYPES
 */
SubTitle.propTypes = {
  /**
   * @prop {Func} onPress - Method responsible for the action of the button.
   */
  onPress: PropTypes.func.isRequired,
  /**
   * @prop {String} title - Sub-title.
   */
  title: PropTypes.string.isRequired,
};
