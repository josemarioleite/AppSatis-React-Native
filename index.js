import {AppRegistry} from 'react-native'
import { createAppContainer } from "react-navigation"
import {name as appName} from './app.json'
import Navigator from "./src/Index"

const App = createAppContainer(Navigator.StackNavigator)
AppRegistry.registerComponent(appName, () => App)


