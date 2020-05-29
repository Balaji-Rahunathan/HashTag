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

console.disableYellowBox = true;
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    HomeStack = () =>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
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




