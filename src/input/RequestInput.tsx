import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import * as Select from '@radix-ui/react-select';
import { CheckboxGroup, Flex, Box, Grid } from '@radix-ui/themes';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField'; 
import ShortTextInput from './ShortTextInput';
import LongTextInput from './LongTextInput';

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
  provide_food: boolean;
  provide_trans_exp: boolean;
  prep_material: string;
  created_at: Date;
}

const RequestInput: React.FC = () => {
  const [formData, setFormData] = useState<RequestProfileProps>({
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
    provide_food: false,
    provide_trans_exp: false,
    prep_material: '',
    created_at: new Date(),
  });

  const handleCurrencyChange = (value: 'USD' | 'JPY' | 'KRW' | '') => {
    setFormData((prevData) => ({
      ...prevData,
      currency: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData((prevData) => ({
        ...prevData,
        date,
      }));
    }
  };

  const handleTimeChange = (time: Date | null, field: 'start_time' | 'end_time') => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: time,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <Form.Root onSubmit={handleSubmit} style={{ width: '512px', height: '1200px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Flex direction='column' align='stretch' justify='center' gap='10'>
          <Grid rows="11" gap="5"> {/* Adjusted rows count */}
          <Box width='100%'>
            <Form.Field name='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control asChild>
                <ShortTextInput />
              </Form.Control>
              <Form.Message>Please enter the title.</Form.Message>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='subtitle'>
              <Form.Label>Subtitle</Form.Label>
              <Form.Control asChild>
                <ShortTextInput />
              </Form.Control>
              <Form.Message>Please enter the subtitle.</Form.Message>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='head_count'>
              <Form.Label>Head Count</Form.Label>
              <Form.Control asChild>
                <ShortTextInput />
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='reward_price'>
              <Form.Label>Reward Price</Form.Label>
              <Form.Control asChild>
                <ShortTextInput />
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='currency'>
              <Form.Label>Currency</Form.Label>
              <Form.Control asChild>
                <Select.Root value={formData.currency} onValueChange={handleCurrencyChange}>
                  <Select.Trigger aria-label='Currency'>
                    <Select.Value placeholder='Select Currency' />
                    <Select.Icon />
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content>
                      <Select.ScrollUpButton />
                      <Select.Viewport>
                        <Select.Item value='USD'>
                          <Select.ItemText>USD</Select.ItemText>
                          <Select.ItemIndicator />
                        </Select.Item>
                        <Select.Item value='JPY'>
                          <Select.ItemText>JPY</Select.ItemText>
                          <Select.ItemIndicator />
                        </Select.Item>
                        <Select.Item value='KRW'>
                          <Select.ItemText>KRW</Select.ItemText>
                          <Select.ItemIndicator />
                        </Select.Item>
                      </Select.Viewport>
                      <Select.ScrollDownButton />
                      <Select.Arrow />
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='date'>
              <Form.Label>Date</Form.Label>
              <Form.Control asChild>
                <DatePicker
                  value={formData.date}
                  onChange={handleDateChange}
                />
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='start_time'>
              <Form.Label>Start Time</Form.Label>
              <Form.Control asChild>
                <TimePicker
                  value={formData.start_time}
                  onChange={(time) => handleTimeChange(time, 'start_time')}
                />
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='end_time'>
              <Form.Label>End Time</Form.Label>
              <Form.Control asChild>
                <TimePicker
                  value={formData.end_time}
                  onChange={(time) => handleTimeChange(time, 'end_time')}
                />
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='content'>
              <Form.Label>Content</Form.Label>
              <Form.Control asChild>
                <LongTextInput />
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='provide_food'>
              <Form.Label>Food & Transport</Form.Label>
              <Form.Control asChild>
                <CheckboxGroup.Root name='example'>
                  <CheckboxGroup.Item value='1'>Food</CheckboxGroup.Item>
                  <CheckboxGroup.Item value='2'>Transport</CheckboxGroup.Item>
                </CheckboxGroup.Root>
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Field name='prep_material'>
              <Form.Label>Preparation Material</Form.Label>
              <Form.Control asChild>
                <ShortTextInput />
              </Form.Control>
            </Form.Field>
          </Box>

          <Box width='100%'>
            <Form.Submit asChild>
              <button type='submit'>Submit</button>
            </Form.Submit>
          </Box>
          </Grid>
        </Flex>
      </LocalizationProvider>
    </Form.Root>
  );
};

export default RequestInput;
