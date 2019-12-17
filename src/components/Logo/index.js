import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

/**
 * LOGO
 */
const logo = require('../../images/airbnb_logo.png');

/**
 * @author JOÃO VITOR DA CRUZ.
 * @example
 * <Logo
 *  style={{ width: 100, height: 100 }}
 * />
 * @description - Component responsible for returning to logo.
 * @version 0.0.1
 */
const Logo = props => {
  const { style } = props;

  return <Image source={logo} style={style} />;
};

export default Logo;

/**
 * PROP-TYPES
 */
Logo.propTypes = {
  /**
   * @prop {Object} style - Logo Style.
   */
  style: PropTypes.object,
};

Logo.defaultProps = {
  style: {},
};
