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
  DatePicker,
  Button,
  Text
} from 'native-base';

import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class Flight extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={styles.menuItem}>
            <Item>
              {/* <Label>Username</Label> */}
              <Icon active name="airplane" />
              <Input placeholder="Dari" />
            </Item>
            <Item>
              <Icon active name="airplane" />
              <Input placeholder="Ke" />
              <Icon active name="swap" />
            </Item>

            <Item>
              <Icon active name="calendar" />
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                // locale={'ID'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Tanggal Keberangkatan"
                // textStyle={{color: 'green'}}
                // placeHolderTextStyle={{color: '#d3d3d3'}}
                onDateChange={()=>{}}
                disabled={false}
              />
            </Item>

            <Item>
              <Icon active name="person" />
              <Input placeholder="Penumpang" />
            </Item>
            <Button full rounded style={{marginTop:20}}>
              <Text>Cari Pesawat Terbang</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    // height: width / 3.5,
    // width: width / 3.5,
    borderRadius: 10,
    padding: 15,
  },
});
