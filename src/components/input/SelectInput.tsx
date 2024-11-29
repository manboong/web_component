import React from "react";
import { Controller } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";

export interface SelectInputProps {
    control: any;
    name: string;
    label: string;
    options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
    control,
    name,
    label,
    options,
}) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <TextField
                {...field}
                select
                label={label}
                fullWidth
                variant="outlined"
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        )}
    />
);

export default SelectInput;
