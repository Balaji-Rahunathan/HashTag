/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Test from './src/screens/test/test.screen';
import Sample from './src/screens/test/sample.screen';
import Splash from './src/screens/spalsh/spalsh.screen';
import Login from './src/screens/auth/login.screen';
import ErrorPage from './src/components/activity/error.component';
import LoadingPage from './src/components/activity/loading.component';

console.disableYellowBox = true;
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    HomeStack = () =>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sample" component={Sample} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="HomeStack" options={{ gestureEnabled: false }} component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
}




