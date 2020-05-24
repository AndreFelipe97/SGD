import React from 'react';
import TitleForm from '../../../components/TitleForm';
import Select from '../../../components/Select';
import SubmitButton from '../../../components/SubmitButton';

import {Container, Form} from './styles';

const AgenteViolador = () => {
  return (
    <Container>
      <TitleForm title="Dados Violação" />
      <Form>
        <Select
          label="Violência principal"
          mensagemSelect="Escolha uma violência"
          values={[
            'Negligência',
            'Violência física',
            'Violência',
            'Psicológica',
            'Violência sexual (abuso)',
            'Exploração sexual comercial',
            'Trabalho infantil',
            'Violência fatal',
            'Outros tipos',
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
        <SubmitButton label="Próximo" path="Dashboard" />
      </Form>
    </Container>
  );
};

export default AgenteViolador;
