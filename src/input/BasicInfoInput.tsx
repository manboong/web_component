import React from 'react';
import ShortTextInput from './ShortTextInput';

interface BasicInfoInputProps {
  control: any;
  onNext: () => void;
}

const BasicInfoInput: React.FC<BasicInfoInputProps> = ({ control, onNext }) => {
  return (
    <div>
      <h3>Basic Information</h3>
      <ShortTextInput control={control} name="name" label="Name" />
      <ShortTextInput control={control} name="age" label="Age" />
      <ShortTextInput control={control} name="gender" label="Gender" />
      <ShortTextInput control={control} name="nationality" label="Nationality" />
      <ShortTextInput control={control} name="phone nubmer" label="Phone Number" />
      <ShortTextInput control={control} name="emergency contact" label="Emergency Contact" />
      <button type="button" onClick={onNext}>Next</button>
    </div>
  );
};

export default BasicInfoInput;