import React from 'react';
import Header from '../../../components/_layout/Topbar';
import TitleForm from '../../../components/TitleForm';
import Select from '../../../components/Select';
import SubmitButton from '../../../components/SubmitButton';

import {Container, Form, Button} from './styles';

const AgenteViolador = ({navigation}) => {
  return (
    <>
      <Header titulo="Cadastro situação" />
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
          <Button>
            <SubmitButton
              label="Próximo"
              navigation={navigation}
              path="AgenteViolador"
            />
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AgenteViolador;
