import React, {useState} from 'react';
import {Text} from 'react-native';

import Label from '../Label';

import {Container, Form, Select} from './styles';

const SelectComponent = ({label, mensagemSelect, values}) => {
  const [selectedValues, setSelectedValues] = useState(values[0]);
  return (
    <Container>
      <Form>
        <Label label={label} />
        <Select
          selectedValue={selectedValues}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValues(itemValue)
          }>
          {[<Select.Item label={mensagemSelect} value={null} />].concat(
            values.map((value) => {
              return <Select.Item key={'value'} label={value} value={value} />;
            }),
          )}
        </Select>
      </Form>
    </Container>
  );
};

export default SelectComponent;
