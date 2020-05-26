import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Header from '../../components/_layout/Topbar';

// import { Container } from './styles';

const Usuarios = ({navigation}) => {
  return (
    <>
      <Header titulo="Usuários" />
      <View>
        <Text>Usuários</Text>
      </View>
    </>
  );
};

export default Usuarios;
