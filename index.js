/** @format */

//Imports

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/componenets/Header'
import AlertList from './src/componenets/AlertList'

//Component

const App = () => (
    <View>
        <Header headerText={'Alerts'}/>
        <AlertList>bla bla</AlertList>
    </View>
);

//Rendering

AppRegistry.registerComponent('MakamWebClient', () => App);