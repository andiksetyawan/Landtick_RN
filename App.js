import React from 'react';
import Home from './src/screens/home';
import User from './src/screens/user';
import Myticket from './src/screens/myticket';

import Train from './src/components/train';
import Flight from './src/components/filght';
import Register from './src/components/register';
import Login from './src/components/login';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Myticket"
            component={Myticket}
            options={{title: 'Tiket Saya'}}
          />
          <Stack.Screen
            name="User"
            component={Login}
            options={{title: 'Profile'}}
          />

          <Stack.Screen
            name="UserLoggedIn"
            component={User}
            options={{title: 'Profile'}}
          />

          <Stack.Screen
            name="Train"
            component={Train}
            options={{title: 'Kereta Api'}}
          />
          <Stack.Screen
            name="Flight"
            component={Flight}
            options={{title: 'Pesawat Terbang'}}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{title: 'Daftar'}}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
