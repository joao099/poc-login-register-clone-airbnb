import React, { PureComponent } from 'react';
import { StatusBar, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import Styles from './styles';
import api from '../../services/api';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { heightPercentageToDP } from '../../utils/utils';

/**
 * COMPONENTES
 */
import InputPassword from '../../components/InputPassword';
import InputEmail from '../../components/InputEmail';
import Logo from '../../components/Logo';
import EnterButton from '../../components/EnterButton';
import SubTitle from '../../components/SubTitle';
import ErrorMessage from '../../components/ErrorMessage';

/**
 * @class
 * @name SignIn
 * @author JOÃO VITOR DA CRUZ.
 * @version 0.0.1
 * @description Login Page.
 */
class SignIn extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: 'jjvtor@hotmail.com',
      password: '123456',
      error: '',
      isLoading: false,
    };
  }

  /**
   * @memberof SignUp
   * @method handleEmailChange
   * @function handleEmailChange
   * @param {String} email - Email to login.
   * @instance
   * @description Method used to change email text.
   */
  handleEmailChange = email => this.setState({ email });

  /**
   * @memberof SignIn
   * @method handlePasswordChange
   * @instance
   * @function handlePasswordChange
   * @param {String} password - Password to login.
   * @description Method used to change password text.
   */
  handlePasswordChange = password => this.setState({ password });

  /**
   * @memberof SignIn
   * @method handleCreateAccountPress
   * @instance
   * @description Action triggered on clicking create account.
   */
  handleCreateAccountPress = () => {
    const { navigation } = this.props;

    navigation.navigate('SignUp');
  };

  /**
   * @memberof SignIn
   * @method handleSignInPress
   * @instance
   * @description Action triggered when pressing login button.
   */
  handleSignInPress = async () => {
    const { password, email } = this.state;
    const { navigation } = this.props;

    if (!password || !email) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' });

      return false;
    }

    this.setState({ isLoading: true });

    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);

      const resetRoute = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Main' })],
      });

      navigation.dispatch(resetRoute);
    } catch (err) {
      this.setState({
        error: 'Houve um problema com o login, verifique suas credenciais!',
      });
    }

    this.setState({ isLoading: false });
  };

  render() {
    const { email, password, error, isLoading } = this.state;

    return (
      <KeyboardAvoidingView
        style={Styles.container}
        behavior="position"
        contentContainerStyle={Styles.container}
        keyboardVerticalOffset={heightPercentageToDP('-10%')}
      >
        <StatusBar hidden barStyle="dark-content" />
        <Logo />
        <InputEmail
          onChangeText={this.handleEmailChange}
          value={email}
          style={Styles.inputEmail}
        />
        <InputPassword
          onChangeText={this.handlePasswordChange}
          value={password}
          style={Styles.inputPassword}
        />
        {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
        <EnterButton
          title="Entrar"
          isLoading={isLoading}
          onPress={this.handleSignInPress}
        />
        <SubTitle
          title="Criar conta grátis"
          onPress={this.handleCreateAccountPress}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default SignIn;

/**
 * PROP-TYPES
 */
SignIn.propTypes = {
  /**
   * @prop {func} navigation - Responsible for managing the navigation.
   */
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
};
