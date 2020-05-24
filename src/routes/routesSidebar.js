import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import RoutesForm from './routesForms';
import Pages from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Pages.Dashboard} />
        <Drawer.Screen name="RoutesForm" component={RoutesForm} />
        <Drawer.Screen
          name="Cadastros"
          component={Pages.IdentificacaoViolada}
        />
        <Drawer.Screen
          name="Acompanhamentos"
          component={Pages.Acompanhamentos}
        />
        <Drawer.Screen name="Relátorios" component={Pages.Relatorios} />
        <Drawer.Screen name="Usuários" component={Pages.Usuarios} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
