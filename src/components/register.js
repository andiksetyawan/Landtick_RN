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

export default class User extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Item regular style={{marginBottom: 10}}>
            <Input placeholder="Username" />
          </Item>
          <Item regular style={{marginBottom: 10}}>
            {/* <Icon active name="email" /> */}
            <Input placeholder="Email" />
          </Item>
          <Item regular style={{marginBottom: 10}}>
            <Input placeholder="Nama Lengkap" />
          </Item>
          <Item regular style={{marginBottom: 10}}>
            <Input placeholder="Password" />
            <Icon active name="eye" />
          </Item>
          <Item regular style={{marginBottom: 10}}>
            <Input placeholder="Jenis Kelamin" />
          </Item>
          <Item regular style={{marginBottom: 40}}>
            <Input placeholder="Alamat" />
          </Item>
          <Button full rounded>
            <Text>DAFTAR</Text>
          </Button>

          <View
            style={{textAlign: 'center', alignItems: 'center', marginTop: 30}}>
            <Text style={{fontSize: 14}}>Sudah punya akun ?</Text>
            <Button
              transparent
              style={{textAlign: 'center'}}
              onPress={() =>
                this.props.navigation.navigate('Login', {name: 'Jane'})
              }>
              <Text>LOGIN SEKARANG</Text>
            </Button>
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
