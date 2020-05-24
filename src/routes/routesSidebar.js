import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Pages from '../pages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Pages.Dashboard} />
      <Drawer.Screen name="Cadastros" component={Pages.IdentificacaoViolada} />
      <Drawer.Screen name="Acompanhamentos" component={Pages.Acompanhamentos} />
      <Drawer.Screen name="Relátorios" component={Pages.Relatorios} />
      <Drawer.Screen name="Usuários" component={Pages.Usuarios} />
    </Drawer.Navigator>
  );
}
