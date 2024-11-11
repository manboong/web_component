import React from 'react';
import { CheckboxGroup, Flex, Box, Grid } from '@radix-ui/themes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useForm, Controller } from 'react-hook-form';

import ShortTextInput from './ShortTextInput';
import LongTextInput from './LongTextInput';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import SelectInput from './SelectInput';

interface RequestProfileProps {
  title: string;
  subtitle: string;
  head_count: number;
  reward_price: number;
  currency: 'USD' | 'JPY' | 'KRW' | '';
  content: string;
  are_needed: string;
  are_required: string;
  date: Date;
  start_time: Date | null;
  end_time: Date | null;
  address: string;
  address_coordinate: { lat: number; lng: number };
  food_transport_options: string[];
  prep_material: string;
  created_at: Date;
}

const RequestInput: React.FC = () => {
  const { control, handleSubmit } = useForm<RequestProfileProps>({
    defaultValues: {
      title: '',
      subtitle: '',
      head_count: 0,
      reward_price: 0,
      currency: '',
      content: '',
      are_needed: '',
      are_required: '',
      date: new Date(),
      start_time: null,
      end_time: null,
      address: '',
      address_coordinate: { lat: 0, lng: 0 },
      food_transport_options: [],
      prep_material: '',
      created_at: new Date(),
    },
  });

  const onSubmit = (data: RequestProfileProps) => {
    console.log('Submitted Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '512px', height: '1200px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Flex direction="column" align="stretch" justify="center" gap="10">
          <Grid rows="12" gap="5">
            <Box width="100%">
              <ShortTextInput control={control} name="title" label="Title" />
            </Box>

            <Box width="100%">
              <ShortTextInput control={control} name="subtitle" label="Subtitle" />
            </Box>

            <Box width="100%">
              <ShortTextInput control={control} name="head_count" label="Head Count" />
            </Box>

            <Box width="100%">
              <ShortTextInput control={control} name="reward_price" label="Reward Price" />
              <SelectInput
                control={control}
                name="currency"
                label="Currency"
                options={[
                  { label: 'USD', value: 'USD' },
                  { label: 'JPY', value: 'JPY' },
                  { label: 'KRW', value: 'KRW' },
                ]}
              />
            </Box>

            <Box width="100%">
              <DateInput control={control} name="date" label="Date" />
            </Box>

            <Box width="100%">
              <TimeInput control={control} name="start_time" label="Start Time" />
            </Box>

            <Box width="100%">
              <TimeInput control={control} name="end_time" label="End Time" />
            </Box>

            <Box width="100%">
              <LongTextInput control={control} name="content" label="Content" />
            </Box>

            <Box width="100%">
              <Controller
                control={control}
                name="food_transport_options"
                render={({ field }) => (
                  <CheckboxGroup.Root
                    value={field.value || []}
                    onValueChange={field.onChange}
                  >
                    <CheckboxGroup.Item value="provide_food">Food</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="provide_trans_exp">Transport</CheckboxGroup.Item>
                  </CheckboxGroup.Root>
                )}
              />
            </Box>

            <Box width="100%">
              <ShortTextInput control={control} name="prep_material" label="Preparation Material" />
            </Box>

            <Box width="100%">
              <button type="submit">Submit</button>
            </Box>
          </Grid>
        </Flex>
      </LocalizationProvider>
    </form>
  );
};

export default RequestInput;
