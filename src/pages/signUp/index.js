import React from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import Styles from './styles';
import { heightPercentageToDP } from '../../utils/utils';
import ErrorMessage from '../../components/ErrorMessage';
import SucessMessage from '../../components/SucessMessage';
import AsyncStorage from '@react-native-community/async-storage';

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
 * @extends PureComponent
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
      errorEmail: '',
      username: '',
      email: '',
      password: '',
      isLoading: false,
      sucess: '',
      showErrorIcon: false,
    };
  }

  /**
   * @memberof SignUp
   * @function handleEmailChange
   * @instance
   * @description Method used to change email text.
   */
  handleEmailChange = email => this.setState({ email });

  /**
   * @memberof SignUp
   * @instance
   * @function handlePasswordChange
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

    if (
      !username ||
      !password ||
      !email ||
      email.indexOf('@') < 0 ||
      email.indexOf('.com') < 0
    ) {
      this.setState({
        error: 'Por favor, preencha todos os campos!',
        showErrorIcon: true,
      });

      return false;
    }

    if (email.indexOf('@') < 0 || email.indexOf('.com') < 0) {
      this.setState({ errorEmail: 'Formato do email inválido!' });

      return false;
    }

    this.setState({ isLoading: true });

    const user = {
      username,
      password,
      email,
    };

    try {
      await AsyncStorage.setItem('@AirbnbApp:user', JSON.stringify(user));

      this.setState({
        sucess: 'Conta criada com sucesso! Redirecionando para o login',
        error: '',
        errorEmail: '',
      });

      setTimeout(this.handleBackToLoginPress, 3000);
    } catch (err) {
      this.setState({
        error: 'Erro ao criar conta, por favor verifique os campos informados',
      });
    }
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
   * @description Responsible for text exchange.
   */
  handleNameChange = username => this.setState({ username });

  render() {
    const {
      error,
      email,
      password,
      isLoading,
      username,
      sucess,
      errorEmail,
      showErrorIcon,
    } = this.state;

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
        <InputName
          showRightIcon={true}
          onChangeText={this.handleNameChange}
          value={username}
        />
        <InputEmail
          onChangeText={this.handleEmailChange}
          value={email}
          showErrorIcon={showErrorIcon}
        />
        {errorEmail.length > 0 && <ErrorMessage>{errorEmail}</ErrorMessage>}
        <InputPassword
          onChangeText={this.handlePasswordChange}
          value={password}
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
