import { FlexWrapper } from "components";
import React, { useRef } from "react";
import styled from "styled-components/macro";
import { Colors } from "styles/theme";
import { Input } from "./elements/Input";

type InputType= 'radio'| 'checkbox'

interface InputProps {
  answer: string;
  type: InputType;
  value:string,
  onChange:() => void;
  backgroundColor?:Colors

}

const InputAnswers: React.FC<InputProps> = ({
  answer,
  type,
  onChange,
  backgroundColor,
  value,
  ...rest
}) => {

  return (
    <InputStyles>
      <Input
      // cursor='pointer'
        key={answer}
        name="answer"
        backgroundColor={backgroundColor}
        label={answer}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </InputStyles>
  );
};

export default InputAnswers;

const InputStyles = styled.div`
display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 100%;
  /* position: relative; */
  /* cursor: pointer; */
  /* background-color: type === 'radio'? red : green; */
  /* input[type='checkbox']{
    cursor: pointer;
    appearance: none;
  }
  input[type='radio']{
    appearance: none;
  } */
  label{
    cursor: pointer;
  display: flex;
  width: 100%;
  /* position: relative; */
  align-items: center;
  /* user-select: none; */
  }
   input {
  position: relative;
  /* opacity: 0; */
  cursor: pointer;
}
`;
