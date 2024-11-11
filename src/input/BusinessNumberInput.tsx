import React from 'react';
import ShortTextInput from './ShortTextInput';

interface BusinessNumberInputProps {
  control: any;
  onNext: () => void;
}

const BusinessNumberInput: React.FC<BusinessNumberInputProps> = ({ control, onNext }) => {
  return (
    <div>
      <h3>Enter Business Number</h3>
      <ShortTextInput control={control} name="businessNumber" label="Business Number" />
      <button type="button" onClick={onNext}>Next</button>
    </div>
  );
};

export default BusinessNumberInput;
