import React, { Component } from 'react';
import {Platform,  StyleSheet ,Text,  View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Register from './screens/RegisterScreen';
import Home from './screens/HomeScreen';
import Scanner from './screens/ScannerScreen';
import Dash from './screens/DashScreen';
import * as firebase from 'firebase';  // Initialize Firebase

var fireBaseconfig = {
    apiKey: "AIzaSyCXu9qloeHGr5r9TH2Z6x_la-cRgoefnxg",
    authDomain: "parkassist-dfae6.firebaseapp.com",
    databaseURL: "https://parkassist-dfae6.firebaseio.com/",
    projectId: "parkassist-dfae6",
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

