import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler'; 

import { ButtonSimple, ButtonDouble, ButtonTriple, OperationButton, ButtonText } from './styles';

const Button = (props) => {

  if (props.double) {
    return (
      <TouchableHighlight
        onPress={props.onClick}
      >
        <ButtonDouble>
          <ButtonText>{props.label}</ButtonText>
        </ButtonDouble>
      </TouchableHighlight>
    );
  } else if (props.triple) {
    return (
      <TouchableHighlight
        onPress={props.onClick}
      >
        <ButtonTriple>
          <ButtonText>{props.label}</ButtonText>
        </ButtonTriple>
      </TouchableHighlight>
    );
  } else if (props.operation) {
    return (
      <TouchableHighlight
        onPress={props.onClick}
      >
        <OperationButton>
          <ButtonText>{props.label}</ButtonText>
        </OperationButton>
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableHighlight
        onPress={props.onClick}
      >
        <ButtonSimple>
          <ButtonText>{props.label}</ButtonText>
        </ButtonSimple>
      </TouchableHighlight>
    );
  }
}

export default Button;