import { Theme } from "styles/theme";
import { Box, BoxProps, Typography } from "components";
import React, { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  BoxProps<Theme> & {
    label?: string;
    errorMessage?: string;
   htmlFor?:string
  };

export const Input: React.FC<InputProps> = ({
  min,
  max,
  placeholder,
  type,
  onChange,
  label,
  errorMessage,
  children,
  htmlFor,
  ...props
}) => {
  return (
    <>
      {errorMessage && (
        <label htmlFor="input">
          <Typography type="body16">{errorMessage}</Typography>
        </label>
      )}
      <label htmlFor={htmlFor}>
        <Typography type="body16">{label}</Typography>
      </label>
      <Box
        as="input"
        placeholder={placeholder}
        min={min}
        max={max}
        type={type}
        onChange={onChange}
        {...props}
        />
        {children}
    </>
  );
};