import React, { useState, useRef, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

import Input from './Input';

interface InputDebouncedProps {
  onChange(event: any): void
  value?: string
}

const InputDebounced = ({ onChange, value: propsValue, ...inputProps }: InputDebouncedProps) => {
  const [value, setValue] = useState(propsValue);
  const isControlled = propsValue !== undefined;

  const handleChange = useCallback(
    debounce((newValue: any) => onChange(newValue), 500),
    [],
  );

  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    if (propsValue !== valueRef.current) {
      setValue(propsValue);
    }
  }, [propsValue]);

  return (
    <Input
      {...inputProps}
      value={isControlled ? value : undefined}
      onChange={newValue => {
        setValue(newValue);
        handleChange(newValue);
      }}
    />
  );
};

export default InputDebounced;