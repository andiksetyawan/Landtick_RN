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
  Subtitle,
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
      <Container>
        <Header style={{backgroundColor: '#0063D3'}}>
          {/* <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left> */}
          <Body>
            <Title style={{marginLeft: 20, fontWeight: 'bold'}}>
              land
              <Title style={{fontWeight: 'normal'}}>tick</Title>
            </Title>
          </Body>
        </Header>
        <Content>
          <View style={{height: height / 4.5}}>
            <Svg>
              <Circle cx={width / 2} cy="-750" r="900" fill="#0063D3" />

              <Image
                style={{width: width, height: 120}}
                source={{
                  uri:
                    'https://static.tiket.photos/image/upload/v1583721540/banner/2020/03/09/8c9333db-7d94-4fb1-af15-39f6705c33e9-1583721539043-768f461d70b286a564db3a371ccf072f.jpg',
                }}
              />
              {/* 
            <Text>Hello Swiper</Text> */}

              {/* <Swiper style={{height: 80}} showsButtons={true}>
              <View style={{flex: 1}}>
              <Image
                  style={{width: 50, height: 50}}
                  source={{uri: 'https://static.tiket.photos/image/upload/v1583721540/banner/2020/03/09/8c9333db-7d94-4fb1-af15-39f6705c33e9-1583721539043-768f461d70b286a564db3a371ccf072f.jpg'}}
                />
              </View>

              
            </Swiper> */}
            </Svg>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Train', {name: 'Jane'})
              }
              underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="train" style={{color: 'red', fontSize: 40}} />
                <Text>Kereta Api</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Flight', {name: 'Jane'})
              }
              underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="airplane" style={{color: 'green', fontSize: 40}} />
                <Text>Pesawat</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="bus" style={{color: 'teal', fontSize: 40}} />
                <Text>Bus</Text>
              </Card>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="bed" style={{color: '#0063D3', fontSize: 40}} />
                <Text>Hotels</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon
                  type="FontAwesome"
                  name="ticket"
                  style={{color: 'orange', fontSize: 40}}
                />
                <Text>Event</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="car" style={{color: '#0063D3', fontSize: 40}} />
                <Text>Sewa Mobil</Text>
              </Card>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="train" />
                <Text>Kereta Api</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="airplane" />
                <Text>Pesawat</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="document" />
                <Text>Event</Text>
              </Card>
            </TouchableHighlight>
          </View>
          <View style={{marginLeft:25, marginTop:30}}>
            <Text>Petualangan seru di Indonesia</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.adventure}>
                <Image
                  source={{
                    uri:
                      'https://static.tiket.photos/image/upload/v1578546044/eventConvertedImages/2020/01/09/b8fabea2-1b53-454d-8339-95f12e185f9a-1578546043795-68680c80d2cfa2d37d424fc02a855d61.jpg',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
                <Text style={styles.subtitle}>Bromo</Text>
              </Card>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.adventure}>
                <Image
                  source={{
                    uri:
                      'https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
                <Text style={styles.subtitle}>Bali</Text>
              </Card>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.adventure}>
                <Image
                  source={{
                    uri:
                      'https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
                <Text style={styles.subtitle}>Bali</Text>
              </Card>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <Card style={styles.adventure}>
                <Image
                  source={{
                    uri:
                      'https://static.tiket.photos/image/upload/v1578546044/eventConvertedImages/2020/01/09/b8fabea2-1b53-454d-8339-95f12e185f9a-1578546043795-68680c80d2cfa2d37d424fc02a855d61.jpg',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
                <Text style={styles.subtitle}>Bromo</Text>
              </Card>
            </TouchableHighlight>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              vertical
              onPress={() =>
                this.props.navigation.navigate('Myticket', {name: 'Jane'})
              }>
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
      </Container>
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
  adventure: {
    height: width / 3,
    width: width / 2.3,
    borderRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  subtitle: {
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    top: 10,
    left: 10,
  },
});
