import React, {useState} from 'react';
import {Text} from 'react-native';
import DatePicker from 'react-native-datepicker';

import Label from '../Label';

import {Container, Form} from './styles';

const Datepicker = ({label}) => {
  const [selectedData, setSelectedData] = useState(null);
  return (
    <Container>
      <Form>
        <Label label={label} />
        <DatePicker
          style={{width: 200}}
          date={selectedData}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          onDateChange={(date) => {
            setSelectedData(date);
          }}
        />
      </Form>
    </Container>
  );
};

export default Datepicker;
