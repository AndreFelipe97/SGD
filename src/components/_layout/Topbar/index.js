import React from 'react';

import {Header, Titulo} from './styles';

const Topbar = ({titulo}) => {
  return (
    <Header>
      <Titulo>{titulo}</Titulo>
    </Header>
  );
};

export default Topbar;
