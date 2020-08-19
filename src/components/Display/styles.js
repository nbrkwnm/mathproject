import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get("window").width;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
`;

export const ValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: ${width}px;
  padding: 0 10px;
`;

export const DisplayText = styled.Text.attrs({
  numberOfLine: 1,
})`
  font-size: 60px;
  color: #FFF;
`;