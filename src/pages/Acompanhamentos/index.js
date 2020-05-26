import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Header from '../../components/_layout/Topbar';

// import { Container } from './styles';

const Acompanhamentos = ({navigation}) => {
  return (
    <>
      <Header titulo="Acompanhamentos" />
      <View>
        <Text>Acompanhamentos</Text>
      </View>
    </>
  );
};

export default Acompanhamentos;
