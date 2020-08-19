import React, { useState, useEffect } from 'react';

import Display from '../../components/Display';
import Button from '../../components/Button';

import { Container, ButtonContainer } from './styles';

const Main = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [displayClear, setDisplayClear] = useState(false);
  const [operator, setOperator] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [currentValue, setCurrentValue] = useState(0);

  const addDigit = (num) => {
    
    if (num === "." && displayValue.includes(".")) {
      return;
    }

    if (displayValue === "0" || displayClear){
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }

    setDisplayClear(false);

  }

  useEffect(() => {
    const newValue = parseFloat(displayValue);
    const valuesCopy = [values];
    valuesCopy[currentValue] = newValue;
    setValues(valuesCopy);
  }, [displayValue]);

  const clearMemory = () => {
    setDisplayValue("0");
    setDisplayClear(false);
    setValues([0,0]);
    setCurrentValue(0);
  }

  const addOperation = (op) => {
    if (currentValue == 0) {
      setOperator(op);
      setCurrentValue(1);
      setDisplayClear(true);
    } else {
      const equals = operator === "=";
      const operationValues = [...values];

      try {
        operationValues[0] = eval(`${operationValues[0]} ${operator} ${operationValues[1]}`);
      } catch (e) {
        operationValues[0] = values[0];
      }

      operationValues[1] = 0;
      setDisplayValue(operationValues[0]);
      if ( equals ) {
        setOperator(null);        
        setCurrentValue(0);
      } else {
        setOperator(operator);
        setCurrentValue(1);
      }

      setDisplayClear(true);
    }
  }

  return (
    <Container>
      <Display value={displayValue}/>
      <ButtonContainer>
        <Button label={"AC"} triple onClick={() => clearMemory()}/>
        <Button label={"/"} operation onClick={() => addOperation("/")}/>
        <Button label={"7"} onClick={() => addDigit("7")}/>
        <Button label={"8"} onClick={() => addDigit("8")}/>
        <Button label={"9"} onClick={() => addDigit("9")}/>
        <Button label={"*"} operation onClick={() => addOperation("*")}/>
        <Button label={"4"} onClick={() => addDigit("4")}/>
        <Button label={"5"} onClick={() => addDigit("5")}/>
        <Button label={"6"} onClick={() => addDigit("6")}/>
        <Button label={"-"} operation onClick={() => addOperation("-")}/>
        <Button label={"1"} onClick={() => addDigit("1")}/>
        <Button label={"2"} onClick={() => addDigit("2")}/>
        <Button label={"3"} onClick={() => addDigit("3")}/>
        <Button label={"+"} operation onClick={() => addOperation("+")}/>
        <Button label={"0"} double onClick={() => addDigit("0")}/>
        <Button label={"."} onClick={() => addDigit(".")}/>
        <Button label={"="} operation onClick={() => addOperation("=")}/>
      </ButtonContainer>
    </Container>
  );
}

export default Main;