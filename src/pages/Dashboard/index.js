import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/_layout/Topbar';
import Botoes from '../../components/Botoes';

// import { Container } from './styles';

const Dashboard = ({navigation}) => {
  return (
    <>
      <Header titulo="Dashboard" />
      <View>
        <Botoes
          label="Novo cadastro"
          icon={<Icon name="edit" size={30} color="#fff" />}
          path="RoutesForm"
          navigation={navigation}
          background="rgb(255, 130, 28)"
        />
        <Botoes
          label="Acompanhamento"
          icon={<Icon name="search" size={30} color="#fff" />}
          path="Acompanhamentos"
          navigation={navigation}
          background="rgb(66, 114, 177)"
        />
        <Botoes
          label="Documentos/Orientação"
          icon={<Icon name="download" size={30} color="#fff" />}
          navigation={navigation}
          background="rgb(64, 196, 255)"
        />
      </View>
    </>
  );
};

export default Dashboard;
