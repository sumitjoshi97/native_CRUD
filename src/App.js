import React, { Component } from 'react'
import { Text, View } from 'react-native'

// import components
import Header from './components/common/Header'

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Name is SJ</Text>
      </View>
    )
  }
}

const styles = {}

export default App
