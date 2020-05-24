import React from 'react';

import {SubmitButton, LabelButton} from './styles';

const SubmitButtonComponent = ({navigation, path, label}) => {
  return (
    <SubmitButton onPress={() => navigation.navigate(path)}>
      <LabelButton>{label}</LabelButton>
    </SubmitButton>
  );
};

export default SubmitButtonComponent;
