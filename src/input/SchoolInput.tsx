import React from 'react';
import ShortTextInput from './ShortTextInput';
import YearMonthInput from './YearMonthInput';
import { Container, Typography, Button, Grid2 as Grid } from '@mui/material';

interface SchoolInputProps {
  control: any;
  index: number;
  onRemove: () => void;
}

const SchoolInput: React.FC<SchoolInputProps> = ({ control, index, onRemove }) => {
  return (
    <Container sx={{ border: '1px solid #e0e0e0', borderRadius: 2, p: 3, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        Academic History {index + 1}
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{xs:12, sm:4}}>
          <ShortTextInput
            control={control}
            name={`academicHistories[${index}].degree`}
            label="Degree"
          />
        </Grid>
        <Grid size={{xs:12, sm:4}}>
          <ShortTextInput
            control={control}
            name={`academicHistories[${index}].faculty`}
            label="Faculty"
          />
        </Grid>
        <Grid size={{xs:12, sm:4}}>
          <ShortTextInput
            control={control}
            name={`academicHistories[${index}].schoolName`}
            label="School Name"
          />
        </Grid>

        <Grid size={{xs:12, sm:4}}>
          <YearMonthInput
            control={control}
            name={`academicHistories[${index}].startDate`}
            label="Start Date"
          />
        </Grid>
        <Grid size={{xs:12, sm:4}}>
          <YearMonthInput
            control={control}
            name={`academicHistories[${index}].endDate`}
            label="End Date"
          />
        </Grid>
        <Grid size={{xs:12, sm:4}} display="flex" justifyContent="flex-end" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={onRemove}
            sx={{ mt: { xs: 2, sm: 0 } }}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SchoolInput;