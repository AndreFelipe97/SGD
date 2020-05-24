import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Pages from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={Pages.Dashboard}
        options={{
          title: 'Dashboard',
          // headerStyle: {
          //   backgroundColor: 'rgb(45, 166, 109)',
          // },
          // headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Cadastros"
        component={Pages.IdentificacaoViolada}
        options={{
          title: 'Cadastros',
          headerStyle: {
            backgroundColor: 'rgb(45, 166, 109)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Acompanhamentos"
        component={Pages.Acompanhamentos}
        options={{
          title: 'Acompanhamentos',
          headerStyle: {
            backgroundColor: 'rgb(45, 166, 109)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Relátorios"
        component={Pages.Relatorios}
        options={{
          title: 'Relátorios',
          headerStyle: {
            backgroundColor: 'rgb(45, 166, 109)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="Usuários"
        component={Pages.Usuarios}
        options={{
          title: 'Usuários',
          headerStyle: {
            backgroundColor: 'rgb(45, 166, 109)',
          },
          headerTintColor: '#fff',
        }}
      />
    </Drawer.Navigator>
  );
}
