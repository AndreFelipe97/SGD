import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import RoutesForm from '../../routes/routesForms';
import Header from '../../components/_layout/Topbar';

import {Container} from './styles';

const Cadastros = ({navigation}) => {
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setSelectedData(`${day}-${month}-${year}`);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Header titulo="Cadastros" />
        <Container>
          <RoutesForm />
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cadastros;
