import React from 'react';
import ShortTextInput from './ShortTextInput';

interface TokenPageProps {
  control: any;
  onSubmit: () => void;
}

const TokenPage: React.FC<TokenPageProps> = ({ control, onSubmit }) => {
  return (
    <div>
      <h3>Enter Verification Token</h3>
      <ShortTextInput control={control} name="token" label="Token" />
      <button type="submit" onClick={onSubmit}>Next</button>
    </div>
  );
};

export default TokenPage;
