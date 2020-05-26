import React from 'react';

import {Container, Title} from './styles';

const Botoes = ({label, icon, path, background, navigation}) => {
  return (
    <Container
      background={background}
      onPress={() => navigation.navigate(path)}>
      <Title>
        {icon} {label}
      </Title>
    </Container>
  );
};

export default Botoes;
