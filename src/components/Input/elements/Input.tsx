import { Theme } from "styles/theme";
import { Box, BoxProps, Typography } from "components";
import React, { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  BoxProps<Theme> & {
    label?: string;
    errorMessage?: string;
    ref?:any
  };

export const Input: React.FC<InputProps> = ({
  min,
  max,
  placeholder,
  type,
  onChange,
  label,
  errorMessage,
  // backgroundColor,
  children,
  ref,
  ...props
}) => {
  return (
    <>
      {errorMessage && (
        <label htmlFor="input">
          <Typography type="body16">{errorMessage}</Typography>
        </label>
      )}
      <label htmlFor="input">
        <Typography type="body16">{label}</Typography>
      </label>
      <Box
        as="input"
        placeholder={placeholder}
        // backgroundColor={backgroundColor}
        min={min}
        max={max}
        type={type}
        onChange={onChange}
        ref={ref}
        {...props}
        />
        {children}
    </>
  );
};