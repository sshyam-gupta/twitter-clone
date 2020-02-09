import React, { forwardRef } from 'react';

import { StyledInput, InputElement } from './styles';

interface InputProps {
  className?: string,
  value?: string | number
  onChange(value: string, event: any): void
};

const Input = forwardRef(({ className, onChange, ...inputProps }: InputProps, ref: any) => {
  const handleChange = (event: any) => {
    onChange(event.target.value, event);
  };

  return (
    <StyledInput className={className}>
      <InputElement {...inputProps} onChange={handleChange} ref={ref} />
    </StyledInput>
  );
});

Input.defaultProps = {
  className: undefined,
  value: undefined,
  onChange: () => {},
};

export default Input;