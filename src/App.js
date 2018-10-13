// import libraries
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'

// import components
import Header from './components/common'

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDzk3lKxlY3sbsXkkh6mPjzh03DrkG926M',
      authDomain: 'native-crud.firebaseapp.com',
      databaseURL: 'https://native-crud.firebaseio.com',
      projectId: 'native-crud',
      storageBucket: 'native-crud.appspot.com',
      messagingSenderId: '1053664661630'
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <Text>Name is SJ</Text>
      </View>
    )
  }
}

const styles = {}

export default App
