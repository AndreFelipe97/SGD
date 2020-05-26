import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {height, width} = Dimensions.get('window');

// export const Container = styled.View`
//   flex: 1;
// `;

export const Form = styled.View`
  flex-direction: row;
  /* flex: 1; */
  padding-bottom: 2px;
  margin-bottom: 20px;
  padding: 10px 15px;
  height: 40px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  /* border-bottom: 1px solid rgba(80, 80, 80, 0.5); */
  /* border-radius: 5px; */
`;

export const IconeView = styled.View`
  justify-content: center;
  align-items: center;
  height: ${height * 0.06}px;
  width: ${width * 0.08}px;
  /* background: #0a452b; */
  /* border-bottom: 1px solid rgba(80, 80, 80, 0.5); */
  color: #000;
  /* border-radius: 4px; */
`;
