import React from 'react';
// import {View} from 'react-native';

import {Container, Form, IconeView, Input} from './styles';

const InputLogin = ({icone, cpf}) => {
  return (
    <Form>
      <IconeView>{icone}</IconeView>
      <Input autoCorrect={false} autoCaptalize="none" placeholder={cpf} />
    </Form>
  );
};

export default InputLogin;
