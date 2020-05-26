import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs((props) => ({
  background: props.background,
}))`
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin: 15px;
  background-color: ${(props) => props.background};
  color: #fff;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: Gibson;
  color: rgba(255, 255, 255, 1);
  font-size: 26px;
`;
