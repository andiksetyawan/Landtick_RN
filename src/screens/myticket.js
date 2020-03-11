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
  ListItem,
} from 'native-base';

import {StyleSheet} from 'react-native';

export default class User extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={styles.menuItem}>
            <ListItem icon>
              <Body>
                <Text>Kode KAI01910</Text>
              </Body>
              <Right>
                <Text style={{fontSize:12, color:"green"}}>approved</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="train" />
              </Left>
              <Body style={{flexDirection: 'row', paddingRight: 10}}>
                <View style={{flexGrow: 1}}>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
                <View>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
              </Body>
            </ListItem>
          </Card>
          <Card style={styles.menuItem}>
            <ListItem icon>
              <Body>
                <Text>Kode KAI01910</Text>
              </Body>
              <Right>
                <Text style={{fontSize:12, color:"green"}}>approved</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="train" />
              </Left>
              <Body style={{flexDirection: 'row', paddingRight: 10}}>
                <View style={{flexGrow: 1}}>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
                <View>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
              </Body>
            </ListItem>
          </Card>
          <Card style={styles.menuItem}>
            <ListItem icon>
              <Body>
                <Text>Kode KAI01910</Text>
              </Body>
              <Right>
                <Text style={{fontSize:12, color:"green"}}>approved</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="train" />
              </Left>
              <Body style={{flexDirection: 'row', paddingRight: 10}}>
                <View style={{flexGrow: 1}}>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
                <View>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
              </Body>
            </ListItem>
          </Card>
          <Card style={styles.menuItem}>
            <ListItem icon>
              <Body>
                <Text>Kode KAI01910</Text>
              </Body>
              <Right>
                <Text style={{fontSize:12, color:"green"}}>approved</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="train" />
              </Left>
              <Body style={{flexDirection: 'row', paddingRight: 10}}>
                <View style={{flexGrow: 1}}>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
                <View>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}>30 Maret 2020, 16.50</Text>
                </View>
              </Body>
            </ListItem>
          </Card>
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
            <Button active vertical>
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
    borderRadius: 10,
    minHeight: 50,
    padding: 5,
  },
});
