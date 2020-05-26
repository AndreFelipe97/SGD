import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import '../config/ReactotronConfig';
import Pages from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerStyle={{
          backgroundColor: '#093d26',
          color: '#fff',
        }}>
        <Drawer.Screen
          name="Dashboard"
          component={Pages.Dashboard}
          options={{title: 'Dashboard'}}
          drawerStyle={{
            color: '#fff',
          }}
        />
        <Drawer.Screen
          name="Cadastros"
          component={Pages.ListaCadastros}
          options={{
            title: 'Cadastros',
            headerStyle: {
              backgroundColor: 'rgb(45, 166, 109)',
            },
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
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
