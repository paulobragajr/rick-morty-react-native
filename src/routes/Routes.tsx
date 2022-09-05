/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../page/home/Home.screen';
import DetailCharacter from '../page/detail/DetailCharacter.screen';
import {RMColors} from '../assets/RMColors';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="DetailCharacter"
          component={DetailCharacter}
          options={{
            title: '',
            headerTintColor: RMColors.themes.textTitle,
            headerStyle: {
              backgroundColor: RMColors.themes.backgroundColor,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
