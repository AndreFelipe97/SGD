import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2px;
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 0 15px;
`;

export const Select = styled.Picker`
  flex: 1;
  height: 40px;
  margin: 8px;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #808080;
`;

// export const ItemStyled = styled.Picker.Item`
//   justify-content: center;
//   align-items: center;
// `;
