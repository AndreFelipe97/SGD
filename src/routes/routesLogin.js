import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Pages from '../pages';

const Stack = createStackNavigator();

function Form() {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Pages.Login} />
    </Stack.Navigator>
  );
}

export default Form;
