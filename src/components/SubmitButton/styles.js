import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {height, width} = Dimensions.get('window');

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  padding: 20px;
  margin: 10px;
  width: ${width * 0.5}px;
  border-radius: 10px;
  align-items: center;
  background: #55c57a;
`;

export const LabelButton = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-size: 17px;
  font-family: Gibson-Regular;
  letter-spacing: 2px;
`;
