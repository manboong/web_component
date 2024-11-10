import React from 'react';
import { useFunnel } from '../hooks/useFunnel';
import { StudentProfileProps } from '../components/StudentProfile';
import ShortTextInput from './ShortTextInput';
import LongTextInput from './LongTextInput';
import { useForm, Controller } from 'react-hook-form';


const StudentProfileSetup: React.FC = () => {
    const { control, handleSubmit } = useForm<StudentProfileProps>({
      defaultValues: {
        name: '',
        imageUrl: '',
        nationality: '',
        age: '',
        gender: '',
        academicHistory: [],
        languageHistory: [],
        past_activity: '',
      },
    });
  
    const { Funnel, Step, setStep, currentStep } = useFunnel('name');
  
    const onSubmit = (data: StudentProfileProps) => {
      console.log('Submitted Data:', data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>Enter Student Profile</h2>
  
        <Funnel>
          <Step name="name">
            <ShortTextInput control={control} name="name" label="Name" />
            <button type="button" onClick={() => setStep('imageUrl')}>Next</button>
          </Step>

          <Step name="imageUrl">
            <ShortTextInput control={control} name="imageUrl" label="Image URL" />
            <button type="button" onClick={() => setStep('nationality')}>Next</button>
          </Step>

          <Step name="nationality">
            <ShortTextInput control={control} name="nationality" label="Nationality" />
            <button type="button" onClick={() => setStep('age')}>Next</button>
          </Step>

          <Step name="age">
            <ShortTextInput control={control} name="age" label="Age" />
            <button type="button" onClick={() => setStep('gender')}>Next</button>
          </Step>

          <Step name="gender">
            <ShortTextInput control={control} name="gender" label="Gender" />
            <button type="button" onClick={() => setStep('academicHistory')}>Next</button>
          </Step>

          <Step name="academicHistory">
            <ShortTextInput control={control} name="academicHistory" label="Academic History" />
            <button type="button" onClick={() => setStep('languageHistory')}>Next</button>
          </Step>

          <Step name="languageHistory">
            <ShortTextInput control={control} name="languageHistory" label="Language History" />
            <button type="button" onClick={() => setStep('past_activity')}>Next</button>
          </Step>

          <Step name="past_activity">
            <ShortTextInput control={control} name="past_activity" label="Past Activity" />
            <button type="submit">Finish</button>
          </Step>
        </Funnel>
      </form>
    );
  };
  
  export default StudentProfileSetup;