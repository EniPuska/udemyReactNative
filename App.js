import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import { name as appName } from './app.json';
import configureStore from './src/store/configureStore';
import { Component } from 'react';

const store = configureStore();

export default class RNRedux extends Component{
    render(){
        return (
            <Provider store = {store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('RNRedux', () => RNRedux);
