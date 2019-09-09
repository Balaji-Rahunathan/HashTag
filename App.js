// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import {createStackNavigator,createDrawerNavigator, createSwitchNavigator, createAppContainer,} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import {Platform} from 'react-native'
import Splash from "./Screens/Splash"
import SignIn from "./Screens/SignIn"
import SignUp from "./Screens/SignUp"
import Interests from "./Screens/Interests"
import Newsfeed from "./Screens/Newsfeed"
import Profile from "./Screens/Profile"
import Discussions from "./Screens/Discussions"


const AuthStack = createStackNavigator({
  SignUp,

  Splash,

  SignIn,
  Profile,
  // SignUp
},
{
  defaultNavigationOptions: {
    headerTintColor:"white"
  },
  transitionConfig: getSlideFromRightTransition
})

const AppStack = createStackNavigator({
  SignUp,

  Splash,

  SignIn,

  Profile,

  // Newsfeed,
  // Profile,
  // Interests,
  // Discussions
},
{
  defaultNavigationOptions: {
  },
  transitionConfig: getSlideFromRightTransition,
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : 20
  }
})

// const AppDrawer = createDrawerNavigator({
//   Home:{screen: AppStack}
// },
// {
//   defaultNavigationOptions: {
//     headerTintColor:"white"
// },
//   transitionConfig: getSlideFromRightTransition,
//   contentComponent:Drawer,  

// })

export default createAppContainer(createSwitchNavigator(
  {
    Splash:Splash,
    Auth:AuthStack,
   // App:AppDrawer,
  },
  {
    initialRouteName: 'Splash',
  }
));
