import React from 'react';
import { useForm } from 'react-hook-form';
import { useFunnel } from '../hooks/useFunnel';
import UserTypeInput from './UserTypeInput';
import EmailInput from './EmailInput';
import TokenInput from './TokenInput';
import BasicInfoInput from './BasicInfoInput';
import AcademicHistoryInput from './AcademicHistoryInput';
import LanguageProfInput from './LanguageProfInput';
import ProfileImageInput from './ProfileImageInput';
import BusinessNumberInput from './BusinessNumberInput';
import { AcademicHistoryCardProps } from '../components/AcademicHistoryCard';
import { LanguageCardProps } from '../components/LanguageCard';

interface StudentProfileProps {
  userType: string;
  email: string;
  token: string;
  name: string;
  imageUrl: string;
  nationality: string;
  age: string;
  gender: string;
  academicHistory: AcademicHistoryCardProps[];
  languageProf: LanguageCardProps[];
}

const StudentProfileSetup: React.FC = () => {
  const { control, handleSubmit, watch } = useForm<StudentProfileProps>({
    defaultValues: {
      userType: '',
      email: '',
      token: '',
      name: '',
      imageUrl: '',
      nationality: '',
      age: '',
      gender: '',
      academicHistory: [],
      languageProf: [],
    },
  });

  const { Funnel, Step, setStep } = useFunnel('userType');

  const userType = watch('userType');

  const onNextStep = () => {
    if (userType === 'student') {
      setStep('email');
    } else if (userType === 'company') {
      setStep('businessNumber');
    } else if (userType === 'government') {
      setStep('GovernmentNumber');
    }
  };
  
  const onSubmit = (data: StudentProfileProps) => {
    console.log('Submitted Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Enter Profile Information</h2>

      <Funnel>
        {/* 공통 Step 1: User Type 선택 */}
        <Step name="userType">
          <UserTypeInput control={control} onNext={onNextStep} />
        </Step>

        {/* 학생 Step 2: Email 입력 */}
        <Step name="email">
          <EmailInput control={control} onNext={() => setStep('token')} />
        </Step>

        {/* 학생 3: Token 입력 */}
        <Step name="token">
          <TokenInput control={control} onNext={() => setStep('basicInfo')} />
        </Step>

        {/* 학생 4: Basic Info 입력 */}
        <Step name="basicInfo">
          <BasicInfoInput control={control} onNext={() => setStep('academicHistory')} />
        </Step>

        {/* 학생 5: Academic History 입력 */}
        <Step name="academicHistory">
          <AcademicHistoryInput control={control} onNext={() => setStep('languageProf')} />
        </Step>

        {/* 학생 6: Language History 입력 */}
        <Step name="languageProf">
          <LanguageProfInput control={control} onNext={() => setStep('imageUrl')} />
        </Step>

        {/* 학생 7: Image URL 입력 */}
        <Step name="imageUrl">
          <ProfileImageInput control={control} onSubmit={handleSubmit(onSubmit)} />
        </Step>

        {/* 기업 Step 2: Business Number 입력 */}
        <Step name="businessNumber">
          <BusinessNumberInput control={control} onNext={() => setStep('businessEmail')} />
        </Step>

        {/* 기업 Step 3: Email 입력 */}
        <Step name="businessEmail">
          <EmailInput control={control} onNext={() => setStep('businessToken')} />
        </Step>

        {/* 기업 4: Token 입력 */}
        <Step name="businessToken">
          <TokenInput control={control} onNext={() => setStep('imageUrl')} />
        </Step>

        {/* 기관 Step 2: Government Number 입력 */}
        <Step name="GovernmentNumber">
          <BusinessNumberInput control={control} onNext={() => setStep('governmentEmail')} />
        </Step>

        {/* 기관 Step 3: Email 입력 */}
        <Step name="governmentEmail">
          <EmailInput control={control} onNext={() => setStep('businessToken')} />
        </Step>

        {/* 기관 4: Token 입력 */}
        <Step name="governmentToken">
          <TokenInput control={control} onNext={() => setStep('imageUrl')} />
        </Step>
      </Funnel>
    </form>
  );
};

export default StudentProfileSetup;