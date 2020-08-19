import React from 'react';
import { Container, ValueContainer, DisplayText } from './styles';

const Display = (props) => {
  return (
    <Container>
      <ValueContainer>
        <DisplayText>
          =
        </DisplayText>
        <DisplayText>
          {props.value}
        </DisplayText>
      </ValueContainer>
    </Container>
  );
}

export default Display;