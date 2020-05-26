import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './routesLogin';
import RoutesForm from './routesForms';
import RoutesSidebar from './routesSidebar';

const Stack = createStackNavigator();

function Root() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Login'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="RoutesForm" component={RoutesForm} />
          <Stack.Screen name="RoutesSidebar" component={RoutesSidebar} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Root;
