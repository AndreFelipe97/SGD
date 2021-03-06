import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IdentificacaoViolado from '../pages/Cadastros/IdentificacaoViolado';
import DadosViolado from '../pages/Cadastros/DadosViolacao';
import AgenteViolador from '../pages/Cadastros/AgenteViolador';

const Stack = createStackNavigator();

function Form() {
  return (
    <Stack.Navigator
      initialRouteName={'IdentificacaoViolado'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="IdentificacaoViolado"
        component={IdentificacaoViolado}
      />
      <Stack.Screen name="DadosViolado" component={DadosViolado} />
      <Stack.Screen name="AgenteViolador" component={AgenteViolador} />
    </Stack.Navigator>
  );
}

export default Form;
