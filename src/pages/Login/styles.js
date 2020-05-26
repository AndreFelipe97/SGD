import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window');
const margin = height * 0.08;

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const ImageBackground = styled.Image.attrs(() => ({
  source: require('../../assets/images/bg_login.png'),
}))`
  flex: 1;
  height: ${height * 1}px;
  position: absolute;
  /* prettier-ignore */
  resizeMode: stretch;
  width: ${width * 1}px;
`;

export const LogoProjeto = styled.Image.attrs(() => ({
  source: require('../../assets/images/logo.png'),
}))`
  flex: 1;
  height: ${height * 0.15}px;
  position: absolute;
  /* prettier-ignore */
  resizeMode: stretch;
  width: ${width * 0.3}px;
  margin: ${height * 0.03}px ${width * 0.2}px;
`;

export const FormLogin = styled.View`
  margin-top: 130px;
  height: ${height * 0.45};
  width: ${width * 0.75}px;
  margin: ${height * 0.25}px ${width * 0.02}px;
`;

export const LogoAssistenciaSocial = styled.Image.attrs(() => ({
  source: require('../../assets/images/logomarco.png'),
}))`
  flex: 1;
  height: ${height * 0.1}px;
  position: absolute;
  /* prettier-ignore */
  resizeMode: stretch;
  width: ${width * 0.6}px;
  margin: ${height * 0.65}px ${width * 0.1}px;
`;

export const Card = styled.View`
  margin: ${margin}px 0;
  height: ${height * 0.8}px;
  width: ${width * 0.8}px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
`;

export const Button = styled.View`
  justify-content: center;
  align-content: center;
  margin: 0 ${width * 0.12}px;
`;
