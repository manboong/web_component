import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import SchoolInput from './SchoolInput';

export interface School {
  degree: string;
  faculty: string;
  school_name: string;
  start_date: string;
  end_date: string;
  status: 'Graduated' | 'In Progress' | 'Withdrawn';
  logo?: string;
}

interface AcademicHistoryInputProps {
  control: any;
  onNext: () => void;
}

const AcademicHistoryInput: React.FC<AcademicHistoryInputProps> = ({ control, onNext }) => {
  const { control: innerControl } = useForm({
    defaultValues: {
      academicHistories: [{ degree: '', faculty: '', school_name: '', start_date: '', end_date: '', status: 'In Progress', logo: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: innerControl,
    name: 'academicHistories',
  });

  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <h3>Academic History</h3>
      {fields.map((field, index) => (
        <SchoolInput
          key={field.id}
          control={innerControl}
          index={index}
          onRemove={() => remove(index)}
        />
      ))}
      <button type="button" onClick={() => append({ degree: '', faculty: '', school_name: '', start_date: '', end_date: '', status: 'In Progress', logo: '' })}>
        Add Academic History
      </button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default AcademicHistoryInput;
