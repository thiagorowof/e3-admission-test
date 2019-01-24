import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { authStateReducer } from './app/components/Login';


const reducers = combineReducers({
    authState:authStateReducer
})

console.disableYellowBox = true;
store = createStore(reducers),appRootComponent = () =>(<Provider store={store}><App/></Provider>)

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => appRootComponent);