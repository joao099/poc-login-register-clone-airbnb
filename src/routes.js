import { createStackNavigator } from 'react-navigation';

/**
 * PAGES
 */
import Main from './pages/main';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

const Routes = createStackNavigator({
  SignIn,
  SignUp,
  Main,
});

export default Routes;
