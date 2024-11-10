import React from 'react';
import { Controller } from 'react-hook-form';
import { Slider, Box } from '@radix-ui/themes';

interface RatingInputProps {
  control: any;
  name: string;
  label: string;
}

const RatingInput: React.FC<RatingInputProps> = ({ control, name, label }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Box>
        <label>{label}</label>
        <Slider
          min={1}
          max={10}
          step={1}
          value={[field.value]}
          onValueChange={(value) => field.onChange(value[0])}
          aria-label="Rating"
        />
        <span>{field.value} / 5</span>
      </Box>
    )}
  />
);

export default RatingInput;
