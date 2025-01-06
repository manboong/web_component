import React, { KeyboardEvent } from "react";
import { useFormContext } from "react-hook-form";
import { Box, Chip, TextField } from "@mui/material";

interface ChipInputProps {
    name: string;
    label?: string;
}

const ChipInput: React.FC<ChipInputProps> = ({ name, label = "Enter Tag" }) => {
    const { watch, setValue } = useFormContext();
    const chips: string[] = watch(name, []);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();

            const inputValue = e.currentTarget.value.trim();
            if (!inputValue) return;

            if (!chips.includes(inputValue)) {
                setValue(name, [...chips, inputValue], { shouldDirty: true });
            }
            e.currentTarget.value = "";
        }
    };

    const handleDeleteChip = (chipToDelete: string) => {
        setValue(
            name,
            chips.filter((chip) => chip !== chipToDelete),
            { shouldDirty: true },
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1,
                p: 1,
                border: "1px solid #ccc",
                borderRadius: 1,
            }}
        >
            {chips.map((chip) => (
                <Chip
                    key={chip}
                    label={chip}
                    onDelete={() => handleDeleteChip(chip)}
                />
            ))}

            <TextField
                variant="standard"
                label={label}
                inputProps={{
                    onKeyDown: handleKeyDown,
                }}
                sx={{
                    minWidth: "120px",
                    flex: "1 0 auto",
                }}
            />
        </Box>
    );
};

export default ChipInput;