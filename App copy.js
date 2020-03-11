import React from 'react';
import {Container, Text} from 'native-base';

import Landing from './src/screens/landing';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      // <Container>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </Container>
      <Landing />
    );
  }
}
