import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-datepicker';

import Label from '../Label';

import {Container, Form} from './styles';

const Datepicker = ({label}) => {
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setSelectedData(`${day}-${month}-${year}`);
  }, []);

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
