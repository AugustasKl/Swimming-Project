import { Check } from "assets/icons";
import { FlexWrapper } from "components";
import React from "react";
import styled from "styled-components/macro";
import { Colors, theme } from "styles/theme";
import { Input } from "./elements/Input";

type InputType = "radio" | "checkbox";

interface InputProps {
 
  answer: string;
  type: InputType;
  value: string;
  onChange: () => void;
  
}

const InputAnswers: React.FC<InputProps> = ({
  answer,
  type,
  onChange,
  value,
  ...rest
}) => {
  return (
    <>
      <InputStyles>
        <Input
        id={answer}
          key={answer}
          name="answer"
          label={answer}
          type={type}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </InputStyles>
      {/* {checked && <Check/>} */}
    </>
  );
};

export default InputAnswers;

export const InputStyles = styled(FlexWrapper).attrs({ as: "label" })`
  cursor: pointer;
  margin: 0.5rem;
  padding: 1rem;
  width: 95%;
  z-index: 1;
  /* border:  */
  input {
    z-index: 0;
    cursor: pointer;
    opacity: 0;
    position: absolute;

  }
  

`;
