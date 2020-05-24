import React, {useState, useEffect} from 'react';

import TitleForm from '../../../components/TitleForm';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Calender from '../../../components/Datepicker';
import SubmitButton from '../../../components/SubmitButton';

import {Form} from './styles';

const IdentificacaoViolado = ({navigation}) => {
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
      <TitleForm title="Violado" />
      <Form>
        <Input label="Nome" placeholder="Digite o nome da vítima" />
        <Select
          label="Sexo"
          mensagemSelect="Escolha um sexo"
          values={['Masculino', 'Feminino']}
        />
        <Select
          label="Idade"
          mensagemSelect="Escolha uma idade"
          values={[
            '00 ano',
            '01 ano',
            '02 ano',
            '03 ano',
            '04 ano',
            '05 ano',
            '06 ano',
            '07 ano',
            '08 ano',
            '09 ano',
            '10 anos',
            '11 anos',
            '12 anos',
            '13 anos',
            '14 anos',
            '15 anos',
            '16 anos',
            '17 anos',
          ]}
        />
        <Select
          label="Etnia"
          mensagemSelect="Escolha um etnia"
          values={['Branco', 'Negro', 'Índio', 'Pardo', 'Sem informação']}
        />
        <Select
          label="Possui deficiência"
          mensagemSelect="Escolha um opção"
          values={['Sim', 'Não']}
        />
        <Calender label="Data do fato" />
        <Select
          label="Localidade"
          mensagemSelect="Escolha uma localidade"
          values={[
            'Urbano Central',
            'Urbano Periférico',
            'Rural',
            'sem informação',
          ]}
        />
        <SubmitButton
          label="Próximo"
          navigation={navigation}
          path="Dashboard"
        />
      </Form>
    </>
  );
};

export default IdentificacaoViolado;
