import React from 'react';
import ShortTextInput from './ShortTextInput';

interface TokenPageProps {
  control: any;
  onNext: () => void;
}

const TokenPage: React.FC<TokenPageProps> = ({ control, onNext }) => {
  return (
    <div>
      <h3>Enter Verification Token</h3>
      <ShortTextInput control={control} name="token" label="Token" />
      <button type="button" onClick={onNext}>Next</button>
    </div>
  );
};

export default TokenPage;
