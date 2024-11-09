import React, { useState } from 'react';
import { TextArea, Box } from '@radix-ui/themes';

export interface LongTextInputProps {
  placeholder?: string;
  maxwidth?: string;
  size?: "1" | "2" | "3";
}

const LongTextInput: React.FC<LongTextInputProps> = ({ placeholder, maxwidth, size }) => {
  const [inputvalue, setInputValue] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box maxWidth={maxwidth}>
      <TextArea 
        size={size} 
        placeholder={placeholder} 
        value={inputvalue} 
        onInput={handleInput}
      />
    </Box>
  );
};

export default LongTextInput;
