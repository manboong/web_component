import React from 'react';
import ShortTextInput from './ShortTextInput';

interface ProfileImageInputProps {
  control: any;
  onSubmit: () => void;
}

const ProfileImageInput: React.FC<ProfileImageInputProps> = ({ control, onSubmit }) => {
  return (
    <div>
      <h3>Profile Picture</h3>
      <ShortTextInput control={control} name="imageUrl" label="Image URL" />
      <button type="button" onClick={onSubmit}>Finish</button>
    </div>
  );
};

export default ProfileImageInput;
