import React from "react";
import { Button } from "@mui/material";

export interface NavigationButtonProps {
    onClick: () => void;
    label: "next" | "previous";
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ onClick, label }) => {
    const isNext = label === "next";

    return (
        <Button
            variant={isNext ? "contained" : "outlined"}
            color={isNext ? "primary" : "secondary"}
            onClick={onClick}
            sx={{
                marginLeft: isNext ? 2 : 0,
                marginRight: isNext ? 0 : 2,
            }}
        >
            {isNext ? "Next" : "Previous"}
        </Button>
    );
};

export default NavigationButton;
