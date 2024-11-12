import React from 'react';
import { Controller } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

interface UserTypeInputProps {
  control: any;
  onNext: () => void;
}

const UserTypeInput: React.FC<UserTypeInputProps> = ({ control, onNext }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Select User Type
      </Typography>
      <Controller
        name="userType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" gap={2}>
            <Box
              onClick={() => field.onChange('student')}
              sx={{
                padding: 2,
                borderRadius: 1,
                border: field.value === 'student' ? '2px solid #3f51b5' : '1px solid #ccc',
                backgroundColor: field.value === 'student' ? '#e3f2fd' : '#f5f5f5',
                cursor: 'pointer',
                textAlign: 'center',
                flex: 1
              }}
            >
              <Typography>학생</Typography>
            </Box>
            <Box
              onClick={() => field.onChange('company')}
              sx={{
                padding: 2,
                borderRadius: 1,
                border: field.value === 'company' ? '2px solid #3f51b5' : '1px solid #ccc',
                backgroundColor: field.value === 'company' ? '#e3f2fd' : '#f5f5f5',
                cursor: 'pointer',
                textAlign: 'center',
                flex: 1
              }}
            >
              <Typography>기업</Typography>
            </Box>
            <Box
              onClick={() => field.onChange('government')}
              sx={{
                padding: 2,
                borderRadius: 1,
                border: field.value === 'government' ? '2px solid #3f51b5' : '1px solid #ccc',
                backgroundColor: field.value === 'government' ? '#e3f2fd' : '#f5f5f5',
                cursor: 'pointer',
                textAlign: 'center',
                flex: 1
              }}
            >
              <Typography>국가기관</Typography>
            </Box>
          </Box>
        )}
      />
      <button type="button" onClick={onNext} style={{ marginTop: '16px' }}>
        Next
      </button>
    </div>
  );
};

export default UserTypeInput;
