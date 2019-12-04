import React from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import Styles from './styles';
import { heightPercentageToDP } from '../../utils/utils';
import api from '../../services/api';
import ErrorMessage from '../../components/ErrorMessage';
import SucessMessage from '../../components/SucessMessage';

/**
 * COMPONENTES
 */
import Logo from '../../components/Logo';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import EnterButton from '../../components/EnterButton';
import SubTitle from '../../components/SubTitle';
import InputName from '../../components/InputName';

/**
 * @class
 * @instance
 * @author JOÃO VITOR DA CRUZ.
 * @description Registration Screen.
 * @version 0.0.1
 */
class SignUp extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      error: '',
      username: '',
      email: '',
      password: '',
      isLoading: false,
      sucess: '',
    };
  }

  /**
   * @memberof SignUp
   * @function handleEmailChange
   * @param {String} email - Email to register user.
   * @instance
   * @description Method used to change email text.
   */
  handleEmailChange = email => this.setState({ email });

  /**
   * @memberof SignUp
   * @instance
   * @function handlePasswordChange
   * @param {String} password - Password to register user.
   * @description Method used to change password text.
   */
  handlePasswordChange = password => this.setState({ password });

  /**
   * @memberof SignUp
   * @instance
   * @function handleCreateAccountPress
   * @description Action triggered on clicking create account.
   */
  handleCreateAccountPress = async () => {
    const { username, password, email } = this.state;

    if (!username || !password || !email) {
      this.setState({ error: 'Por favor, preencha todos os campos!' });

      return false;
    }

    this.setState({ isLoading: true });

    try {
      await api.post('/users', {
        username,
        email,
        password,
      });

      this.setState({
        sucess: 'Conta criada com sucesso! Redirecionando para o login',
        error: '',
      });

      setTimeout(this.handleBackToLoginPress, 2500);
    } catch (err) {
      this.setState({
        error:
          'Houve um problema com o cadastro, verifique os dados preenchidos!',
      });
    }

    this.setState({ isLoading: false });
  };

  /**
   * @memberof SignUp
   * @instance
   * @author JOÃO VITOR DA CRUZ.
   * @function handleBackToLoginPress
   * @description Action to return to a login screen.
   */
  handleBackToLoginPress = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  /**
   * @memberof SignUp
   * @instance
   * @function handleNameChange
   * @param {String} username - Username to register user.
   * @description Responsible for text exchange.
   */
  handleNameChange = username => this.setState({ username });

  render() {
    const { error, email, password, isLoading, username, sucess } = this.state;

    return (
      <KeyboardAvoidingView
        style={Styles.container}
        behavior="position"
        contentContainerStyle={Styles.container}
        keyboardVerticalOffset={heightPercentageToDP('-8%')}
      >
        <StatusBar hidden barStyle="dark-content" />
        <Logo />
        {sucess.length !== 0 && <SucessMessage>{sucess}</SucessMessage>}
        <InputName onChangeText={this.handleNameChange} value={username} />
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
          isLoading={isLoading}
          onPress={this.handleCreateAccountPress}
          title="Criar conta"
        />
        <SubTitle
          title="Voltar ao login"
          onPress={this.handleBackToLoginPress}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;
