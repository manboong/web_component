import React from 'react';
import ShortTextInput from './ShortTextInput';

interface AcademicHistoryPageProps {
  control: any;
  onNext: () => void;
}

const AcademicHistoryPage: React.FC<AcademicHistoryPageProps> = ({ control, onNext }) => {
  return (
    <div>
      <h3>Academic History</h3>
      <ShortTextInput control={control} name="academicHistory" label="Academic History" />
      <button type="button" onClick={onNext}>Next</button>
    </div>
  );
};

export default AcademicHistoryPage;
