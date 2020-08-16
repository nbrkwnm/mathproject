import React from 'react';

import Display from '../../components/Display';
import Button from '../../components/Button';

import { Container, ButtonContainer } from './styles';

const Main = () => {
  const displayValue = "0";

  return (
    <Container>
      <Display value={displayValue}/>
      <ButtonContainer>
        <Button label={"AC"} triple />
        <Button label={"/"} operation />
        <Button label={"7"}/>
        <Button label={"8"}/>
        <Button label={"9"}/>
        <Button label={"*"} operation/>
        <Button label={"4"}/>
        <Button label={"5"}/>
        <Button label={"6"}/>
        <Button label={"-"} operation/>
        <Button label={"1"}/>
        <Button label={"2"}/>
        <Button label={"3"}/>
        <Button label={"+"} operation/>
        <Button label={"0"} double/>
        <Button label={"."}/>
        <Button label={"="} operation/>
      </ButtonContainer>
    </Container>
  );
}

export default Main;