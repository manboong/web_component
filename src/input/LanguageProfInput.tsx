import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import TestInput from './TestInput';

export interface LanguageCardProps {
  level: number;
  exam_result: string;
  exam_name: string;
  language: string;
}

interface LanguageProfInputProps {
  control: any;
  onNext: () => void;
}

const LanguageProfInput: React.FC<LanguageProfInputProps> = ({ control, onNext }) => {
  const { control: innerControl } = useForm({
    defaultValues: {
      languageHistories: [{ language: '', exam_name: '', exam_result: '', level: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: innerControl,
    name: 'languageHistories',
  });

  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <h3>Language History</h3>
      {fields.map((field, index) => (
        <TestInput
          key={field.id}
          control={innerControl}
          index={index}
          onRemove={() => remove(index)}
        />
      ))}
      <button type="button" onClick={() => append({ language: '', exam_name: '', exam_result: '', level: 0 })}>
        Add Language History
      </button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default LanguageProfInput;
