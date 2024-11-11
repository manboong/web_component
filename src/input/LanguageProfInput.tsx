import React from 'react';
import ShortTextInput from './ShortTextInput';

interface LanguageProfInputProps {
  control: any;
  onNext: () => void;
}

const LanguageProfInput: React.FC<LanguageProfInputProps> = ({ control, onNext }) => {
  return (
    <div>
      <h3>Language History</h3>
      <ShortTextInput control={control} name="languageHistory" label="Language History" />
      <button type="button" onClick={onNext}>Next</button>
    </div>
  );
};

export default LanguageProfInput;
