import {createStackNavigator} from 'react-navigation'
import Auth from './config/Auth'
import Home from './main/Home'
import ScreenOne from './screenCom/ScreenOne'
import ScreenTwo from './screenCom/ScreenTwo'
import ScreenThree from './screenCom/ScreenThree'
import Thanks from './components/Thanks'
import Splash from './styles/Splash'

const StackNavigator = createStackNavigator({
  Splash: {
      screen: Splash,
  },
  Auth: {
       screen: Auth
  },
  Home: {
      screen: Home,
  },
  ScreenOne: {
      screen: ScreenOne,
  },
  ScreenTwo: {
      screen: ScreenTwo,
  },
  ScreenThree: {
      screen: ScreenThree,
  },
  Thanks: {
      screen: Thanks
  },
},
  {
  headerMode: 'none',
  mode: 'modal',
  onTransitionEnd: false
})

export default {StackNavigator}
