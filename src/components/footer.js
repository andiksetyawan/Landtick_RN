import React from 'react';

import {
  Container,
  Content,
  View,
  Header,
  Title,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Card,
  Button,
  Text,
  CardItem,
  Body,
  Footer,
  FooterTab,
} from 'native-base';

import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const {height, width} = Dimensions.get('window');

import Swiper from 'react-native-swiper';

export default class Landing extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="ticket" />
            <Text>My Ticket</Text>
          </Button>

          <Button
            vertical
            onPress={() =>
              this.props.navigation.navigate('User', {name: 'Jane'})
            }>
            <Icon name="person" />
            <Text>User</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    height: width / 3.5,
    width: width / 3.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
