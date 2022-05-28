import React from "react";
import { FlexWrapper } from "components";
import { Input } from "./elements/Input";
import styled from "styled-components/macro";
import { tablet } from "styles/theme";


type InputType = "radio" | "checkbox";


interface InputProps {
  answer: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: InputType;
  value: string;
}

const InputAnswers: React.FC<InputProps> = ({
  answer,
  onChange,
  type,
  value,
  ...rest
}) => {
  return (
      <InputStyles>
        <Input
          id={answer}
          htmlFor={answer}
          key={answer}
          name={answer}
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

export const InputStyles = styled(FlexWrapper).attrs({ as: "label" })`
  width: 100%;
  
  padding: 1rem;
  margin: 0.5rem;

  cursor: pointer;
  input {
    opacity: 0;
  }
  p{
    cursor:pointer
  }
  @media ${tablet} {
  padding: 1rem 0.25rem;
  font-size: 14px;
  }
`;
