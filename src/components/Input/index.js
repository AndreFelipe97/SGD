import React from 'react';
import {Text} from 'react-native';

import Label from '../Label';

import {Container, Form, Input} from './styles';

const InputComponent = ({label, placeholder}) => {
  return (
    // <Container>
    <Form>
      <Label label={label} />
      <Input
        autoCorrect={false}
        autoCaptalize="none"
        placeholder={placeholder}
      />
    </Form>
    // </Container>
  );
};

export default InputComponent;
