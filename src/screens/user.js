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
  H3,
  ListItem,
  Switch,
  Divider,
} from 'native-base';

export default class User extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            {/* <H3>Andik Setyawan</H3> */}
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: 'gray'}}>
                  <Icon active name="person" />
                </Button>
              </Left>
              <Body>
                <Text>Andik Setyawan</Text>
                {/* <Text style={{color: 'orange'}}>Belum terverifikasi</Text> */}
              </Body>
              <Right>
                {/* <Text>GeekyAnts</Text> */}
                <Icon style={{color: 'black'}} active name="create" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text style={{color: 'orange', fontSize: 14}}>
                  Belum terverifikasi
                </Text>
              </Body>
            </ListItem>
          </Card>

          <View style={{marginTop: 20}}>
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="settings" />
                </Button>
              </Left>
              <Body>
                <Text>Pengaturan</Text>
              </Body>
              <Right>
                {/* <Text>GeekyAnts</Text> */}
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="locate" />
                </Button>
              </Left>
              <Body>
                <Text>Lokasi</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          </View>

          <View style={{marginTop: 20}}>
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="help" />
                </Button>
              </Left>
              <Body>
                <Text>Bantuan</Text>
              </Body>
              <Right>
                {/* <Text>On</Text> */}
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: 'red'}}>
                  <Icon active name="log-out" />
                </Button>
              </Left>
              <Body>
                <Text>Keluar</Text>
              </Body>
              <Right>
                {/* <Text>On</Text> */}
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() =>
                this.props.navigation.navigate('Home', {name: 'Jane'})
              }>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() =>
                this.props.navigation.navigate('Myticket', {name: 'Jane'})
              }>
              <Icon type="FontAwesome" name="ticket" />
              <Text>My Ticket</Text>
            </Button>
            <Button vertical active>
              <Icon name="person" />
              <Text>User</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
