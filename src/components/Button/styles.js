import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const height = ((Dimensions.get("window").width / 4) - 5 );

export const ButtonSimple = styled.View`
  height: ${height}px;
  width: ${height}px;
  padding: 20px;
  background-color: #f0f0f0;
  justify-content: center;
  border-radius: ${height}px;
  margin-bottom: 5px;
`;

export const ButtonDouble = styled(ButtonSimple)`
  width: ${height * 2}px;
`;

export const ButtonTriple = styled(ButtonSimple)`
  width: ${height * 3}px;
`;

export const OperationButton = styled(ButtonSimple)`
  color: #FFF;
  background-color: #00FFB3;
`;

export const ButtonText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
