import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex: 1;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Button = styled.View`
  justify-content: center;
  align-content: center;
  margin: 0 ${width * 0.12}px;
`;
