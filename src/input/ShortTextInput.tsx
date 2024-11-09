import React, { useState } from 'react';
import { TextField, Box } from '@radix-ui/themes';

export interface ShortTextInputProps {
  placeholder?: string;
  maxwidth?: string;
  size?: "1" | "2" | "3";
}

const ShortTextInput: React.FC<ShortTextInputProps> = ({ placeholder , maxwidth, size }) => {
  const [inputvalue, setInputValue] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  return (
  <Box maxWidth={maxwidth}>
    <TextField.Root size={size} placeholder={placeholder} value={inputvalue} onChange={handleInputChange}>
    </TextField.Root>
  </Box>
  );
};

export default ShortTextInput;