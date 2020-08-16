import React from 'react';
import { Container, DisplayText } from './styles';

const Display = (props) => {
  return (
    <Container>
      <DisplayText>
        {props.value}
      </DisplayText>
    </Container>
  );
}

export default Display;