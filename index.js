import { AppRegistry } from 'react-native';
import React, { Component } from 'react'; 
import App from './App';
import { Provider } from 'react-redux';
import store from './DataConfig/Store/store'
console.disableYellowBox = true;
import {name as appName} from './app.json';


export default class Index extends Component {
    render() {
      return (
        <Provider store={store}>
            <App />
        </Provider>
      );
    }
  }

AppRegistry.registerComponent(appName, () => Index);