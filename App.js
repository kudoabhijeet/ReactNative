import React, { Component } from 'react';
import {Platform,  StyleSheet ,Text,  View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Register from './screens/RegisterScreen';
import Home from './screens/HomeScreen';
import Scanner from './screens/ScannerScreen';
import Dash from './screens/DashScreen';
import * as firebase from 'firebase';  // Initialize Firebase

var fireBaseconfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
    };
let firebaseApp = firebase.initializeApp(fireBaseconfig);
export const db = firebaseApp.database();


//React-Navigation
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  RegisterScreen: { screen: Register },
  ScannerScreen : {screen : Scanner},
  DashScreen : {screen : Dash},
});
export default createAppContainer(AppNavigator);

