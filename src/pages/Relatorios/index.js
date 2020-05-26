import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Header from '../../components/_layout/Topbar';

// import { Container } from './styles';

const Relatorios = () => {
  return (
    <>
      <Header titulo="Relátorios" />
      <View>
        <Text>Relatorios</Text>
      </View>
    </>
  );
};

export default Relatorios;
