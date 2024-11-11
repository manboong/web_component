import React from 'react';
import { Controller } from 'react-hook-form';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface UserTypeInputProps {
  control: any;
  onNext: () => void;
}

const UserTypeInput: React.FC<UserTypeInputProps> = ({ control, onNext }) => {
  return (
    <div>
      <h3>Select User Type</h3>
      <Controller
        name="userType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel value="student" control={<Radio />} label="학생" />
            <FormControlLabel value="company" control={<Radio />} label="기업" />
            <FormControlLabel value="government" control={<Radio />} label="국가기관" />
          </RadioGroup>
        )}
      />
      <button type="button" onClick={onNext}>Next</button>
    </div>
  );
};

export default UserTypeInput;