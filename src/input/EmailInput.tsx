import React from 'react';
import ShortTextInput from './ShortTextInput';

interface EmailInputProps {
  control: any;
  onNext: () => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ control, onNext }) => {
  return (
    <div>
      <h3>Enter Your Email</h3>
      <ShortTextInput control={control} name="email" label="Email" />
      <button type="button" onClick={onNext}>Next</button>
    </div>
  );
};

export default EmailInput;
