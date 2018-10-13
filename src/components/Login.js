import React, { Component } from 'react'
import { Text, View } from 'react-native'

// import components
import { Button, Card, CardItem } from './common'

export default class Login extends Component {
  render() {
    return (
      <Card>
        <CardItem>item1</CardItem>
        <CardItem>item2</CardItem>
        <CardItem>
          <Button>Login</Button>
        </CardItem>
      </Card>
    )
  }
}
