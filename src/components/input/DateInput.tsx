import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3/index.js";

export interface DateInputProps {
    control: any;
    name: string;
    label?: string;
    defaultValue?: Date;
    sx?: object;
}

const DateInput: React.FC<DateInputProps> = ({ control, name, label, defaultValue, sx }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <DatePicker
                    {...field}
                    label={label}
                    defaultValue={defaultValue}
                    onChange={(date) => field.onChange(date)}
                    value={field.value}
                    slotProps={{
                        textField: { fullWidth: true },
                    }}
                    sx={sx}
                />
            )}
        />
    </LocalizationProvider>
);

export default DateInput;
