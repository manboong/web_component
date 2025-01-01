import React from "react";
import { Controller } from "react-hook-form";
import { Box, Card, CardContent, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import LocationCityIcon from "@mui/icons-material/LocationCity";

interface UserTypeInputProps {
    control: any;
}

const UserTypeInput: React.FC<UserTypeInputProps> = ({ control }) => {
    return (
        <Card
            sx={{
                maxWidth: 1080,
                margin: "auto",
                borderRadius: "16px",
                fontFamily: "Noto Sans KR",
                backgroundColor: "#ffffff",
                border: "1px solid #d3d3d3",
                boxShadow: "none",
            }}
        >
            <CardContent>
                <Controller
                    name="userType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <>
                            <Box
                                flexDirection="column"
                                display="flex"
                                gap={3}
                                marginY={4}
                                alignItems="center"
                            >
                                <Card
                                    onClick={() => field.onChange("student")}
                                    sx={{
                                        padding: 2,
                                        border:
                                            field.value === "student"
                                                ? "1px solid #3f51b5"
                                                : "1px solid #ccc",
                                        backgroundColor:
                                            field.value === "student"
                                                ? "#e3f2fd"
                                                : "#f9f9f9",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        maxWidth: "400px",
                                        borderRadius: 2,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#dceefb",
                                        },
                                    }}
                                >
                                    <SchoolIcon
                                        fontSize="large"
                                        sx={{
                                            marginRight: 2,
                                            color:
                                                field.value === "student"
                                                    ? "#3f51b5"
                                                    : "#666",
                                        }}
                                    />
                                    <Typography>학생</Typography>
                                </Card>
                                <Card
                                    onClick={() => field.onChange("corp")}
                                    sx={{
                                        padding: 2,
                                        border:
                                            field.value === "corp"
                                                ? "1px solid #3f51b5"
                                                : "1px solid #ccc",
                                        backgroundColor:
                                            field.value === "corp"
                                                ? "#e3f2fd"
                                                : "#f9f9f9",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        maxWidth: "400px",
                                        borderRadius: 2,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#dceefb",
                                        },
                                    }}
                                >
                                    <BusinessIcon
                                        fontSize="large"
                                        sx={{
                                            marginRight: 2,
                                            color:
                                                field.value === "corp"
                                                    ? "#3f51b5"
                                                    : "#666",
                                        }}
                                    />
                                    <Typography>기업</Typography>
                                </Card>
                                <Card
                                    onClick={() => field.onChange("orgn")}
                                    sx={{
                                        padding: 2,
                                        border:
                                            field.value === "orgn"
                                                ? "1px solid #3f51b5"
                                                : "1px solid #ccc",
                                        backgroundColor:
                                            field.value === "orgn"
                                                ? "#e3f2fd"
                                                : "#f9f9f9",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        maxWidth: "400px",
                                        borderRadius: 2,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#dceefb",
                                        },
                                    }}
                                >
                                    <LocationCityIcon
                                        fontSize="large"
                                        sx={{
                                            marginRight: 2,
                                            color:
                                                field.value === "orgn"
                                                    ? "#3f51b5"
                                                    : "#666",
                                        }}
                                    />
                                    <Typography>국가기관</Typography>
                                </Card>
                            </Box>
                        </>
                    )}
                />
            </CardContent>
        </Card>
    );
};

export default UserTypeInput;
