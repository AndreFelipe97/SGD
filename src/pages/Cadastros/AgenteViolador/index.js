import React from 'react';
import TitleForm from '../../../components/TitleForm';
import Select from '../../../components/Select';
import SubmitButton from '../../../components/SubmitButton';

import {Container, Form} from './styles';

const AgenteViolador = () => {
  return (
    <Container>
      <TitleForm title="Agente violador" />
      <Form>
        <Select
          label="Parentesco"
          mensagemSelect="Escolha um parentesco"
          values={[
            'Mãe',
            'Pai',
            'Irmão',
            'Padrasto',
            'Madrasta',
            'Outro parente',
            'Não possui parentesco',
            'Não identificado',
          ]}
        />
        <Select
          label="Idade"
          mensagemSelect="Selecione uma idade"
          values={[
            'Adolescente',
            'Adulto jovem (até 29 anos)',
            'adulto (dos 30 as 59 anos)',
            'idoso',
          ]}
        />
        <Select
          label="Sexo"
          mensagemSelect="Escolha um sexo"
          values={['Masculino', 'Feminino']}
        />
        <SubmitButton label="Finalizar" path="Dashboard" />
      </Form>
    </Container>
  );
};

export default AgenteViolador;
