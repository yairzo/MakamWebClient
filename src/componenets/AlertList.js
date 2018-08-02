import React, { Component } from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'

class AlertList extends Component {

    componentWillMount(){
        axios.get('https://data.2nd-opinion.co.il/2nd-opinion/rest/get_pure_alerts', {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded',
                    'authorization': 'Bearer: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJob3NwaXRhbDI0MSIsImF1ZGllbmNlIjoidW5rbm93biIsImNyZWF0ZWQiOjE1MzEwNTc0ODg1MTAsImV4cCI6NDEyMzA1NzQ4OH0.ET5DUKtRukncUK2BsSWWaYgDwz8J4o2VSBz3tMM1aUIURd9a9abJbySmwK176uSyYIYf-gA0JoArmlN-eTsUgA'
                }
            }).then(response => console.log(response));

        console.log("ComponentWillMount() Called.");
    }

    constructor(){
        super();
        console.log("Constructor Called.");
    }

    componentDidMount(){
        console.log("ComponentDidMount() Called.");
    }

    render () {
        console.log('log log log 1');
        return (
            <View>
                <Text>Alert List!!!</Text>
            </View>
        );
    }
}

export default AlertList;