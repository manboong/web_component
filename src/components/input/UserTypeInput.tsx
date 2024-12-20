
import React from "react";
import { Controller } from "react-hook-form";
import { Box, Card, Typography, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import LocationCityIcon from "@mui/icons-material/LocationCity";

export interface UserTypeInputProps {
    control: any;
    onNext: () => void;
}

const UserTypeInput: React.FC<UserTypeInputProps> = ({ control, onNext }) => {
    return (
        <Card
            sx={{
                maxWidth: 1024,
                minHeight: 500,
                padding: "0 !important",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #d3d3d3",
                boxShadow: "none",
            }}
        >
            <CardContent
                sx={{
                    padding: 2
                }}
            >
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
                            alignItems="center"
                            marginY={4}
                        >
                            <Box
                                onClick={() => field.onChange("student")}
                                sx={{
                                    width: "300px",
                                    padding: 4,
                                    border:
                                        field.value === "student"
                                            ? "1px solid #3f51b5"
                                            : "1px solid #ccc",
                                    backgroundColor:
                                        field.value === "student"
                                            ? "#e3f2fd"
                                            : "#f9f9f9",
                                    cursor: "pointer",
                                    textAlign: "center",
                                    height: "80px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                        marginBottom: 1,
                                        color:
                                            field.value === "student"
                                                ? "#3f51b5"
                                                : "#666",
                                    }}
                                />
                                <Typography>학생</Typography>
                            </Box>
                            <Box
                                onClick={() => field.onChange("corp")}
                                sx={{
                                    width: "300px",
                                    padding: 4,
                                    border:
                                        field.value === "corp"
                                            ? "1px solid #3f51b5"
                                            : "1px solid #ccc",
                                    backgroundColor:
                                        field.value === "corp"
                                            ? "#e3f2fd"
                                            : "#f9f9f9",
                                    cursor: "pointer",
                                    textAlign: "center",
                                    height: "80px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                        marginBottom: 1,
                                        color:
                                            field.value === "corp"
                                                ? "#3f51b5"
                                                : "#666",
                                    }}
                                />
                                <Typography>기업</Typography>
                            </Box>
                            <Box
                                onClick={() => field.onChange("orgn")}
                                sx={{
                                    width: "300px",
                                    padding: 4,
                                    border:
                                        field.value === "orgn"
                                            ? "1px solid #3f51b5"
                                            : "1px solid #ccc",
                                    backgroundColor:
                                        field.value === "orgn"
                                            ? "#e3f2fd"
                                            : "#f9f9f9",
                                    cursor: "pointer",
                                    textAlign: "center",
                                    height: "80px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                        marginBottom: 1,
                                        color:
                                            field.value === "orgn"
                                                ? "#3f51b5"
                                                : "#666",
                                    }}
                                />
                                <Typography>국가기관</Typography>
                            </Box>
                        </Box>
                        <Box
                            onClick={field.value ? onNext : undefined}
                            sx={{
                                marginTop: 4,
                                padding: 2,
                                borderRadius: 1,
                                border: "1px solid #ccc",
                                backgroundColor: field.value
                                    ? "#3f51b5"
                                    : "#f5f5f5",
                                color: field.value ? "#ffffff" : "#666",
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: "16px",
                                cursor: field.value ? "pointer" : "not-allowed",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: field.value
                                        ? "#303f9f"
                                        : "#f5f5f5",
                                },
                                width: "150px",
                                margin: "0 auto",
                            }}
                        >
                            Next
                        </Box>
                    </>
                )}
            />
            </CardContent>
        </Card>
    );
};

export default UserTypeInput;
