import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import InputLogin from '../../components/InputLogin';
import SubmitButton from '../../components/SubmitButton';

import {
  Container,
  ImageBackground,
  Card,
  LogoProjeto,
  LogoAssistenciaSocial,
  FormLogin,
  Button,
} from './styles';

const Login = ({navigation}) => {
  return (
    <Container>
      <ImageBackground />
      <Card>
        <LogoProjeto />
        <FormLogin>
          <InputLogin
            icone={<Icon name="user" size={20} color="#000" />}
            cpf="Coloque o seu CPF"
          />
          <InputLogin
            icone={<Icon name="lock" size={20} color="#000" />}
            cpf="Digite sua senha"
          />
          <Button>
            <SubmitButton
              label="Login"
              navigation={navigation}
              path="RoutesSidebar"
            />
          </Button>
        </FormLogin>
        <LogoAssistenciaSocial />
      </Card>
    </Container>
  );
};

export default Login;
